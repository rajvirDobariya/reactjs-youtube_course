import React from 'react';
import { ListGroup } from 'reactstrap'; // Import necessary Bootstrap components
import { Link } from 'react-router-dom';

export default function Menus() {
  return (
    <div>
      <ListGroup>
        <Link to="/" className="list-group-item list-group-item-action">
          Home
        </Link>
        <Link to="/add-course" className="list-group-item list-group-item-action">
          Add Course
        </Link>
        <Link to="/all-courses" className="list-group-item list-group-item-action">
          All Courses
        </Link>
        <Link to="/about" className="list-group-item list-group-item-action">
          About
        </Link>
        <Link to="/contact" className="list-group-item list-group-item-action">
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}
