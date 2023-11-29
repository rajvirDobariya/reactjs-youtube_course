import React, { useState, useEffect } from "react";
import Course from "./Cource";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllCources() {
  const [courses, setCourses] = useState([]);
  const [hasToastBeenDisplayed, setHasToastBeenDisplayed] = useState(false);


  useEffect(() => {
    document.title = "All Courses";

    axios.get(`${base_url}/courses`)
      .then((response) => {
        setCourses(response.data);

        if (!hasToastBeenDisplayed) {
          // toast.success("Courses loaded successfully!");
          setHasToastBeenDisplayed(true);
        }
      })
      .catch((error) => {
        // toast.error("Something went wrong!");
      });
  }, []);

  const updateCourses = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const h1Style={
    textAlign:'center', color:'#244648', fontSize:"2em", fontStyle:'Optima'
  };
  return (
    <>
    <div>
      <h1 className='' style={h1Style}>All Courses</h1>
      {courses.length > 0
        ? courses.map((course) => (
            <Course key={course.id} course={course} updateCourses={updateCourses} />
          ))
        : "No Courses"}
    </div>
  </>
  );
}
