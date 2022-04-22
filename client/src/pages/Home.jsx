import React, { useState } from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/taskSlice'

export default function Home() {

  const [newTask, setNewTask] = useState({
    title: 'yeet'
  })

  const tasks = useSelector(state => state.task.tasks)
  const dispatch = useDispatch()

  const testTask = {
    uid: 5,
    title: 'NEW TASK',
    status: 'completed',
    priority: 'high'

  }

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
      <button
        onClick={() => dispatch(addTask(
          {
            uid: 5,
            title: newTask.title,
            status: 'completed',
            priority: 'high'
          }
        ))}
      >Add Task</button>

    </div>

  )
}
