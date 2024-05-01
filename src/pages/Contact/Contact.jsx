import React from 'react'
import "./Contact.scss"

function Contact() {
  return (
  <>
   <section class="hero4">
        <div>

            <h2>Contact Me</h2>
            <p>Have questions? I have answers.</p>
        </div>
        
    </section>
    <div className="form">
      <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
      <input placeholder="Name" type="text" />
      <input placeholder="Email address" type="text" />
      <input placeholder="Phone number" type="text" />
      <input placeholder="Message" type="text" />
    </div>
    
  
  </>
  )
}

export default Contact