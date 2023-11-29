import React, { useState, useEffect } from "react";
import Course from "./Cource";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllCources() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses";
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {

    axios.get(`${base_url}/courses`).then(

      (response) => {
        console.log(response);
        toast.success("Courses loaded successfully!");
        setCourses(response.data);
      },
      
      (error) => {
        console.log(error);
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
