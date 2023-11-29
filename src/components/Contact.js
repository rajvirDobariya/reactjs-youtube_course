import React, { useEffect } from 'react';

export default function Contact() {

  useEffect(()=>{
    document.title="Contact";
},[])

  return (
    <div>
      <h1>Contact page</h1>
    </div>
  )
}
