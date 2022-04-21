import React from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/taskSlice'

export default function Home() {

  const tasks = useSelector(state => state.task.tasks)
  const dispatch = useDispatch()

  const newTask = {
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
      ============
      <br />

      <button
        onClick={() => dispatch(addTask(newTask))}
      >Add Task</button>

    </div>

  )
}
