import axios from "axios";
import React, { useEffect, Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddCourse() {

  const location = useLocation();
  const updateCourse = location?.state?.course; 
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Course";
  }, []);


  const handleForm = (e) => {
    e.preventDefault();
    
    if (updateCourse) {
      const updatedCourse = { ...course, id: updateCourse.id };
    
      updateCourseToServer(updatedCourse);
    } else {
      addCourseToServer(course);
    }
  };
  
  const addCourseToServer = (course) => {
    axios.post(`${base_url}/courses`, course).then(
      (response) => {
        toast.success("Course Added Successfully!");
        navigate("/all-courses");
      },
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  };

  const updateCourseToServer = (course) => {
    const url = (`${base_url}/courses/${course.id}`);
    console.log("course:---" + course);
    console.log("url:---" + url);
    axios.put(url, course).then(
      (response) => {
        toast.success("Course Updated Successfully!");
        // rediret all courses
        navigate("/all-courses");
      },
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  };

  return (
    <>
      <Fragment>
        <h1 className="">Fill Course Detail</h1>
        <Form onSubmit={handleForm}>

          <FormGroup>
            <Label for="courseTitle">Course Title</Label>
            <Input
              type="text"
              name="courseTitle"
              id="courseTitle"
              placeholder="Enter course title"
              style={inputStyle}
              onChange={(e)=>{
                setCourse({...course,title:e.target.value});
              }}

            />
          </FormGroup>

          <FormGroup>
            <Label for="courseDescription">Course Description</Label>
            <Input
              type="textarea"
              name="courseDescription"
              id="courseDescription"
              placeholder="Enter course description"
              style={textareaStyle}
              onChange={(e)=>{
                setCourse({...course,description:e.target.value})
              }}

            />
          </FormGroup>

          <div className="" style={buttonContainerStyle}>
            <Button type='submit' color="primary" style={buttonStyle}>
              Submit
            </Button>
            <Button type='reset' color="success" style={buttonStyle} onClick={(e) => { setCourse({}) }}>
              Clear
            </Button>
          </div>
        </Form>
      </Fragment>
    </>
  );
}

const inputStyle = {
  borderRadius: "5px",
  border: "1px solid #ccc",
  padding: "8px",
  width: "100%",
  marginBottom: "15px",
};

const textareaStyle = {
  borderRadius: "5px",
  border: "1px solid #ccc",
  padding: "8px",
  width: "100%",
  height: "150px",
  marginBottom: "15px",
};

const buttonContainerStyle = {
  textAlign: "center",
};

const buttonStyle = {
  margin: "0 10px",
};
