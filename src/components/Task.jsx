import React from 'react'
import { printDate } from '../middleware/datetime'

export default function Task({ uid, title, desc, status, severity, time_created, time_updated }) {
  return (
    <div className='task task--task'>
      <div className="task__uid">#{uid}</div>
      <div className="task__title">{title}</div>
      <div>Description: {desc}</div>
      <div className="task__severity">{severity}</div>
      <div className="task__status">{status}</div>
      <div className="task__updated">{printDate(time_updated)}</div>
      <div className="task__created">{printDate(time_created)}</div>
    </div>
  )
}