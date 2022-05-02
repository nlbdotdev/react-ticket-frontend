import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, setActiveTask } from '../features/taskSlice';

export default function Navbar() {
    const dispatch = useDispatch()

    return (
        <nav className='nav'>
            <Link to="/">Home</Link> |{" "}
            <Link to="/newtask">New Task</Link> |{" "}

            <button
                onClick={() => dispatch(fetchTasks())}
            >Fetch Tasks</button>
            <br />

            |{" "}
            
            <button
                onClick={() => dispatch(setActiveTask(-1))}
            >+</button>
            <br />

        </nav>
    )
}
