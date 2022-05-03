import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../features/taskSlice'
import { getDate } from '../middleware/datetime'

export default function EditTask({ taskUID }) {

    // Hooks
    const dispatch = useDispatch()
    const [task, setTask] = useState({})

    // Load the current task from redux state
    const importTask = useSelector(state =>
        state.task.tasks.filter(taskObj => {
            return taskObj.uid === taskUID
        })[0]
    )

    // Update local task w/ imported task
    useEffect(() => {
        setTask(importTask)
    }, [importTask])

    // Middleware submit function so that only editable data is submitted
    const submitTaskUpdate = async () => {

        const updatedTaskFields = {
            "id": task._id,
            "title": task.title,
            "desc": task.desc,
            "status": task.status,
            "severity": task.severity,
            "time_updated": new Date()
        }

        dispatch(updateTask(updatedTaskFields))
    }

    return (
        <div>
            Editing Task: {taskUID}
            <br />

            <label>Title: </label>

            <input
                id='title'
                value={task.title}
                onChange={e => setTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <label>Description: </label>

            <textarea
                id='desc'
                value={task.desc}
                onChange={e => setTask({ ...task, [e.target.id]: e.target.value })}
            />
            <br />

            <label>Status: </label>

            <input
                id='status'
                value={task.status}
                onChange={e => setTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <label>Severity: </label>

            <input
                id='severity'
                value={task.severity}
                onChange={e => setTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <button
                onClick={() => submitTaskUpdate()}
            >  Update Task</button>
            <br />

        </div>
    )
}
