import React from 'react';
import { Card, CardBody } from 'reactstrap'; // Import necessary Bootstrap components

export default function Header(props) {
  const cardStyle = {
    color: '#c2d3d0',
    backgroundColor: '#244648',
    textAlign: 'center', // Text alignment
    margin: '20px', // Margin
    padding: '20px' // Padding
  };

  const h1Style = {
    fontSize: '2em' // Font size for the heading
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <h1 style={h1Style}>Welcome to Courses Application</h1>
      </CardBody>
    </Card>
  );
}
