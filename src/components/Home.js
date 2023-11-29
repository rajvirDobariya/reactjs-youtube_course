import React, { useEffect } from 'react';
import { Button } from 'reactstrap';

export default function Home() {

  useEffect(()=>{
    document.title="Home";
},[])

const homeStyle = {
  color: '#244648',
  backgroundColor: '#c2d3d0',
  textAlign: 'center',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#244648',
  border: 'none',
  borderRadius: '5px',
  padding: '12px 24px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '20px',
  transition: 'background-color 0.3s ease-in-out',
  textDecoration: 'none',
  display: 'inline-block',
  outline: 'none',
};
  return (
    <>
    <div className='home' style={homeStyle}>
        <h1 className='display-3'>Learn code with Durgesh</h1>
        <Button style={buttonStyle}>Start Using</Button>
    </div>
    </>
  )
}
