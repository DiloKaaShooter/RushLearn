import React from 'react'
import './Navbar.css'
import Click from './Button'
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="Project">
          <div className="Logo">
            <img src='../assets/student.png' alt="" />
          </div>
          <div className="Name">
            <span id='Rush'>Rush</span>Learn
          </div>
        </div>
        <div className="authentication">
          <div className="login">
            <Click text='Sign In' color='customBlack'/>
          </div>
          <div className="Signup">
          <Click text='Sign Up' color='customBlack'/>
          </div>
        </div>
      </nav>
    </>
  )
}
