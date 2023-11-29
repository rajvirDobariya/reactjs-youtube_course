import React from 'react';
import { Card, CardBody } from 'reactstrap'; // Import necessary Bootstrap components

export default function Header(props) {
  const cardStyle = {
    backgroundColor: '#244648',
    color: '#c2d3d0',
    textAlign: 'center',
    padding: '05px',
    marginBottom:'20px',
    marginTop :'20px'
  };

  const h1Style = {
    fontSize: '3em' // Font size for the heading
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <h1 className='display-3' style={h1Style}>Welcome to IT Courses Application</h1>
      </CardBody>
    </Card>
  );
}
