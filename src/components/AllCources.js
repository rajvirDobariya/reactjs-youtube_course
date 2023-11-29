import React, { useState, useEffect } from "react";
import Course from "./Cource";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllCources() {
  const [courses, setCourses] = useState([]);


  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    document.title = "All Courses";

    axios.get(`${base_url}/courses`).then(
      (response) => {
        setCourses(response.data);
        if (!toastShown) {
          toast.success("Courses loaded successfully!");
          setToastShown(true);
        }
      },
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  }, []);

  const getAllCoursesFromServer = () => {

    axios.get(`${base_url}/courses`).then(

      (response) => {
        setCourses(response.data);
        toast.success("Courses loaded successfully!");
      },
      
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  };

  const updateCourses=(id)=>{
    setCourses(courses.filter(course=>course.id!==id));
  }
  return (
    <>
      <div>
        <h1>All Courses</h1>
        {courses.length > 0
          ? courses.map((course) => <Course key={course.id} course={course} updateCourses={updateCourses} />)
          : "No Courses"}
      </div>
    </>
  );
}
