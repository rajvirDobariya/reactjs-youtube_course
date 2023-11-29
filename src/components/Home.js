import React from 'react'
import { Button } from 'reactstrap';

export default function Home() {
    const homeStyle = {
        color: '#244648',
        backgroundColor: '#c2d3d0',
        textAlign: 'center',
        padding: '40px',
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      };

      const buttonStyle = {
        backgroundColor: '#rgb(20 94 91)', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '1rem',
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
