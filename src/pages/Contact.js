import React from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='contact'>
    <div class="contact-container">
        <h2>Contact Us</h2>
        <form class="contact-form">

            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" />

            <label for="message">Message:</label>
            <textarea name="message" id="message" placeholder="Write a message.."></textarea>
            
            <div class="submit-btn">
                <input type="submit" id="submit" />
                <Link to={"/"} id='cancel'>Cancel</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
