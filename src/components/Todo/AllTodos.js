import React, { useState } from "react";
import Course from "../Cource";
import DisplayCount from "./DisplayCount";

export default function AllTodos() {
    const [todos, setTodos] = useState([]);
    const updateCourses = (id) => {
        setTodos(todos.filter((course) => course.id !== id));
      };
    
      const h1Style={
        textAlign:'center', color:'#244648', fontSize:"2em", fontStyle:'Optima'
      };
    
  return (
    <>
    <div>
      <h1 className='' style={h1Style}>All Courses</h1>
      <DisplayCount />
      {todos.length > 0
        ? todos.map((todo) => (
            <Course key={todo.id} course={todo} updateCourses={updateCourses} />
          ))
        : "No Todos"}
    </div>
  </>

  )
}
