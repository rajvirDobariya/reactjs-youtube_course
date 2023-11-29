import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function Course({course}) {
  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    margin: '20px auto',
    maxWidth: '400px',
  };

  const buttonStyle = {
    margin: '0 10px',
    borderRadius: '5px',
    padding: '10px 20px',
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <CardTitle>{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <div style={{ textAlign: 'center' }}>
          <Button style={buttonStyle} color="primary">Update</Button>
          <Button style={buttonStyle} color="danger">Delete</Button>
        </div>
      </CardBody>
    </Card>
  );
}
