import React, { useEffect, useState } from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'



export default function Home() {

  const tempDate = new Date('2022-03-23T16:12:14.771477+00:00')

  // Vars
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task.tasks)
  const [newTask, setNewTask] = useState({
    uid: 1,
    title: 'New Task',
    desc: 'this is a description',
    severity: 'B',
    status: 'incomplete',
    time_created: tempDate,
    time_updated: tempDate,
  })

  // Fetch tasks on load
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (

    <div>Tasks Page:

      {tasks.map((task, idx) =>
        <Task
          key={`task-${idx}`}
          {...task}
        />
      )}

      <br />
      =====================
      <br />

      <label>Title: </label>

      <input
        id='title'
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
      ></input>
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
        onClick={() => dispatch(postTask(newTask))}
      >  Post Task</button>
      <br />

      <button
        onClick={() => dispatch(fetchTasks())}
      >Fetch Tasks</button>
      <br />

    </div>
  )
}