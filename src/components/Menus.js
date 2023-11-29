import React from 'react';
import { ListGroup } from 'reactstrap'; // Import necessary Bootstrap components
import { Link } from 'react-router-dom';

export default function Menus() {

  const homeStyle = {
    marginTop: '20px',
    marginRight: '60px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  
  const linkStyle={
    color: '#244648',
    backgroundColor: '#c2d3d0',
    paddingLeft:'20px',
    fontSize:'20px',
    ':hover': {
      fontWeight: 'bold', // Make text bold on hover
    },
  }
  return (
    <div >
      <ListGroup style={homeStyle}>
        <Link to="/" className="list-group-item list-group-item-action" style={linkStyle}>
          Home
        </Link>
        <Link to="/add-course" className="list-group-item list-group-item-action" style={linkStyle}>
          Add Course
        </Link>
        <Link to="/all-courses" className="list-group-item list-group-item-action" style={linkStyle}>
          All Courses
        </Link>
        <Link to="/about" className="list-group-item list-group-item-action" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" className="list-group-item list-group-item-action" style={linkStyle}>
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}
