import React from 'react'
import { Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link> |{" "}
            <Link to="/newtask">New Task</Link> |{" "}
        </nav>
    )
}
