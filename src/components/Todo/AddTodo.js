import React, { useEffect, Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function AddTodo() {
    const [todo, setTodo] = useState({});
  
    useEffect(() => {
      document.title = "Add Todo";
    }, []);

    const handleForm = (event) => {
        event.preventDefault();
        console.log(todo.title);        
        console.log(todo.description);        
        setTodo({title:'',description:''})
    }   

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

      const handleTitleChange = (event) => {
        setTodo({
          ...todo,
          title: event.target.value
        });
      };

      const handleDescriptionChange = (event) => {
        setTodo({
            ...todo,
            description: event.target.value
          });
        };

        const handleClear = () => {
            setTodo({});
          };
          
  return (
    <>
    <Fragment>
      <div style={homeStyle}>
      <h1 className="" style={{textAlign:'center'}}>Fill Todo Detail</h1>
      <Form onSubmit={handleForm}>

        <FormGroup>
          <Label for="courseTitle">Title</Label>
          <Input
            type="text"
            name="courseTitle"
            id="courseTitle"
            placeholder="Enter title"
            style={inputStyle}
            value={todo.title}
            onChange={handleTitleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="courseDescription">Description</Label>
          <Input
            type="textarea"
            name="courseDescription"
            id="courseDescription"
            placeholder="Enter description"
            style={textareaStyle}
            value={todo.description}
            onChange={handleDescriptionChange}

          />
        </FormGroup>

        <div className="" style={buttonContainerStyle}>
          <Button type='submit' color="primary" style={buttonStyle}>
            Submit
          </Button>
          <Button type='reset' color="success" style={buttonStyle} onClick={handleClear}>
            Clear
          </Button>
        </div>
      </Form>
      </div>
    </Fragment>
  </>
  )
}
