import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const Course = ({ course, updateCoursePage, updateCourses }) => {
  const navigate = useNavigate();

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    margin: "20px auto",
    maxWidth: "400px",
  };

  const updateButtonStyle = {
    margin: "0 10px",
    borderRadius: "5px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  };
  
  const deleteButtonStyle = {
    margin: "0 10px",
    borderRadius: "5px",
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
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
        <CardTitle>{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <div style={{ textAlign: "center" }}>
        <Button
            style={updateButtonStyle}
            onClick={() => updateCourse(course)}
          >
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
