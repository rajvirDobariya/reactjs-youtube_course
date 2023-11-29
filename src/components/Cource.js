import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({ course, updateCoursePage, updateCourses }) => {
  const navigate = useNavigate();

  const cardStyle = {
    color: "#244648",
    backgroundColor: "#c2d3d0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    margin: "20px auto",
    maxWidth: "400px",
    textAlign: "center",
  };

  const cardTextStyle = {
    fontSize: "1.2rem", // Increase text size
    // fontWeight: "bold", // Increase font weight
    marginBottom: "15px",
  };

  const cardTitleStyle={
    fontSize: "1.2rem", // Increase text size
    fontWeight: "bold", // Increase font weight
    marginBottom: "15px",
    
  }
  const updateButtonStyle = {
    margin: "0 5px", // Decrease button margin
    borderRadius: "5px",
    padding: "8px 16px", // Decrease button padding
    backgroundColor: "#244648",
    color: "#c2d3d0",
    fontSize: "0.8rem", // Decrease button text size
    fontWeight: "bold",
  };

  const deleteButtonStyle = {
    margin: "0 5px", // Decrease button margin
    borderRadius: "5px",
    padding: "8px 16px", // Decrease button padding
    backgroundColor: "#dc3545",
    color: "#fff",
    fontSize: "0.9rem", // Decrease button text size
  };

  const deleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      axios.delete(`${base_url}/courses/${id}`).then(
        (response) => {
          updateCourses(id);
          console.log("Course Deleted Successfully!");
          toast.success("Course Deleted Successfully!");
          navigate("/all-courses");
        },
        (error) => {
          console.log("Something went wrong!");
          toast.error("Something went wrong!");
        }
      );
    }
  };

  const updateCourse = (course) => {
    navigate("/add-course", { state: { course } });
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <CardTitle style={cardTitleStyle}>{course.title}</CardTitle>
        <CardText style={cardTextStyle}>{course.description}</CardText>
        <div style={{ textAlign: "center" }}>
          <Button style={updateButtonStyle} onClick={() => updateCourse(course)}>
            Update
          </Button>
          <Button
            style={deleteButtonStyle}
            onClick={() => deleteCourse(course.id)}
          >
            Delete
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Course;
