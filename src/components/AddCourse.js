import React, { useEffect, Fragment, useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddCourse() {

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
        setTimeout(() => {
          navigate("/all-courses");
        }, 1000); 
      },
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  };

  const updateCourseToServer = (course) => {
    const url = (`${base_url}/courses/${course.id}`);
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

  const homeStyle = {
    color: '#244648',
    backgroundColor: '#c2d3d0',
    textAlign: 'center',
    padding: '20px',
    marginTop: '3px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <>
      <Fragment>
        <div style={homeStyle}>
        <h1 className="" style={{textAlign:'center'}}>Fill Course Detail</h1>
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
        </div>
      </Fragment>
    </>
  );
}


