import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'
import { getDate } from '../middleware/datetime'

// do time and ID automatically, accept other fields
// make severity and status enums
// on post > fetch up to date task list, so you have an accurate ID, use that id, and fetch time...
// you could have a server state management to prevent multiple bugs from submitting... e.g: adding bug status

export default function EditTask({ taskUID }) {

    const tempDate = new Date()
    const dispatch = useDispatch()

    const [task, updateTask] = useState({
        title: "",
        desc: "",
        severity: "",
        status: "",
        time_created: tempDate,
        time_updated: tempDate,
    })

    const importTask = useSelector(state =>

        state.task.tasks.filter(taskObj => {
            return taskObj.uid === taskUID
        })[0]

    )

    useEffect(() => {
        updateTask(importTask)
    }, [importTask])

    const submitTask = async () => {

        const currentTime = await getDate()

        updateTask({
            ...task,
            time_created: currentTime,
            time_updated: currentTime
        })

        dispatch(postTask(task))
    }


    return (
        <div>
            Editing Task: {taskUID}
            <br />

            <label>Title: </label>

            <input
                id='title'
                value={task.title}
                onChange={e => updateTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <label>Description: </label>

            <textarea
                id='desc'
                value={task.desc}
                onChange={e => updateTask({ ...task, [e.target.id]: e.target.value })}
            />
            <br />

            <label>Status: </label>

            <input
                id='status'
                value={task.status}
                onChange={e => updateTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <label>Severity: </label>

            <input
                id='severity'
                value={task.severity}
                onChange={e => updateTask({ ...task, [e.target.id]: e.target.value })}
            ></input>
            <br />

            <button
                onClick={() => submitTask()}
            >  Post Task</button>
            <br />

        </div>
    )
}
