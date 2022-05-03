import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { BugFill, ListTask, PersonCircle, BoxArrowLeft } from 'react-bootstrap-icons';

export default function Navbar() {
  return (

    <nav className='nav'>

      <div className='nav__logo'>
        <Link to="/"><BugFill /> React Ticket Tracker</Link>
      </div>

      <div className='nav__links'>

        <Link to="/account"><PersonCircle /> Account</Link>
        <Link to="/logout"><BoxArrowLeft /> Logout</Link>
        <Link to="/newtask"><ListTask /> New Task</Link>

      </div>

    </nav>
  )
}
