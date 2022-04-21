import React from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/taskSlice'

export default function Home() {

  const tasks = useSelector(state => state.task.tasks)
  const dispatch = useDispatch()

  const newTask = {
    task: 'NEW TASK',
    status: 'completed',
    priority: 'high'

  }

  return (

    <div>Tasks Page:

      {tasks.map(() => <Task />)}

      <button
        onClick={() => dispatch(addTask(newTask))}
      >Add Task</button>

    </div>

  )
}
