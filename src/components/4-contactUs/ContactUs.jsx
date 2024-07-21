import React from 'react'
import './contactUs.css'
const Contact  = () => {
  return (
    <section className='contact-us'>   
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and Get notified when i publish something new.</p>

      <div className="flex">
        <form>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input type="text" id='email' placeholder='Email Address' required style={{padding: "10px 10px"}}/>
          </div>
          <div  className='flex' style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message</label>
            <textarea id="message" placeholder='Message' required style={{padding: "10px 10px"}}></textarea>
          </div>
          
          <button className='submit'>Submit</button>
        </form>
        <div className="animation border">animation</div>
      </div> 


    </section>
  )
}


export default Contact
