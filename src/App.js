import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import AllCources from "./components/AllCources";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/Todo/AddTodo";
import AllTodos from "./components/Todo/AllTodos";

function App() {
  
 
  return (
    <>
      <Router>
        <Container>
          <Header />
          <ToastContainer/>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route exact key='general-route' path="/" element={<Home />}></Route>
                <Route exact key='general-route' path="/add-course" element={<AddCourse />}></Route>
                <Route exact key='general-route' path="/all-courses" element={<AllCources />}></Route>
                <Route exact key='general-route' path="/about" element={<About />}></Route>
                <Route exact key='general-route' path="/contact" element={<Contact />}></Route>
                <Route exact key='general-route' path="/add-todo" element={<AddTodo />}></Route>
                <Route exact key='general-route' path="/all-todos" element={<AllTodos />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
