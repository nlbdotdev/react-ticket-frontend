import React, { useEffect, useState } from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'

export default function Home() {

  // Vars
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task.tasks)
  const [newTask, setNewTask] = useState({
    uid: 1,
    title: 'New Task',
    status: 'incomplete',
    priority: 'medium'
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

      <label>Priority: </label>

      <input
        id='priority'
        value={newTask.priority}
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