import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='contact'>
    <div class="contact-container">
            <h2>Login</h2>
            <form class="contact-form">
    
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" />
    
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" />

                <div class="submit-btn">
                    <Link id='submit'>Login</Link>
                    <Link to={"/"} id='cancel'>Cancel</Link>
                </div>
            
                <Link className='forgotten-password'>Forgotten Password?</Link>

                <div className='sign-up'>
                    <p>New Customer?</p>
                    <Link className='sign-up-link'>Sign Up</Link>
                </div>
                
            </form>
        </div>
        </div>
  )
}
