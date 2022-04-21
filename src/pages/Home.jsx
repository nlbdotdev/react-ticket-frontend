import React, { useState } from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/taskSlice'

export default function Home() {

  const [newTask, setNewTask] = useState("Yadda")

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
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      ></input>

      <br />
      <button
        onClick={() => dispatch(addTask(testTask))}
      >Add Task</button>

    </div>

  )
}
