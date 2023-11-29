import React, { Fragment } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function AddCourse() {
  return (
    <>
      <Fragment>
        <h1 className="">Fill Course Detail</h1>
        <Form>
          <FormGroup>
            <Label for="userId">Course Id</Label>
            <Input
              type="text"
              name="userId"
              id="userId"
              placeholder="Enter text here"
              style={inputStyle}
            />
          </FormGroup>

          <FormGroup>
            <Label for="courseTitle">Course Title</Label>
            <Input
              type="text"
              name="courseTitle"
              id="courseTitle"
              placeholder="Enter course title"
              style={inputStyle}
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
            />
          </FormGroup>

          <div className='' style={buttonContainerStyle}>
            <Button color="primary" style={buttonStyle}>
              Submit
            </Button>
            <Button color="success" style={buttonStyle}>
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
