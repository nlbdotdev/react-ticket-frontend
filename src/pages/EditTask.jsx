import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'
import { getDate } from '../middleware/datetime'

// do time and ID automatically, accept other fields
// make severity and status enums
// on post > fetch up to date task list, so you have an accurate ID, use that id, and fetch time...
// you could have a server state management to prevent multiple bugs from submitting... e.g: adding bug status

export default function EditTask() {

  const tempDate = new Date()
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState({
    title: 'New Task',
    desc: 'this is a description',
    severity: 'B',
    status: 'incomplete',
    time_created: tempDate,
    time_updated: tempDate,
  })

  const submitTask = async () => {

    const currentTime = await getDate()

    setNewTask({
      ...newTask,
      time_created: currentTime,
      time_updated: currentTime
    })

    console.log('hello')
    dispatch(postTask(newTask))
  }

  return (
    <div>
      Edit Task Page:
      <br />

      <label>Title: </label>

      <input
        id='title'
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
      ></input>
      <br />

      <label>Description: </label>

      <textarea
        id='desc'
        value={newTask.desc}
        onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
      />
      <br />


      <label>Status: </label>

      <input
        id='status'
        value={newTask.status}
        onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
      ></input>
      <br />

      <label>Severity: </label>

      <input
        id='severity'
        value={newTask.severity}
        onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
      ></input>
      <br />

      <button
        onClick={() => submitTask()}
      >  Post Task</button>
      <br />
    
    </div>
  )
}
