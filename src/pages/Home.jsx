import React from 'react'
import Task from '../components/Task'

const tasks = [
  {
    task: 'task one',
    status: 'completed',
    priority: 'high'
  },
  {
    task: 'task two',
    status: 'incompleted',
    priority: 'medium'
  },
  {
    task: 'task three',
    status: 'completed',
    priority: 'low'
  },
  {
    task: 'task four',
    status: 'incompleted',
    priority: 'high'
  },
]

export default function Home() {
  return (

    <div>Home

      {tasks.map(() => {
        return <Task />
      })}

    </div>

  )
}
