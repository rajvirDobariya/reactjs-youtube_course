import React, { useState } from 'react'
import Course from './Cource';


export default function AllCources() {

    const [courses,setCourses] = useState([]);

  return (
    <>
        <div>
            <h1>All Courses</h1>
            {
                courses.length>0 ?courses.map((course)=>{
                    <Course course={course}/>
                }) : "No Courses"
            }
        </div>
    </>
  )
}
