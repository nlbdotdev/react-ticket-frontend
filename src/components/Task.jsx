import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTask } from '../features/taskSlice'
import { printDate } from '../middleware/datetime'

export default function Task({ uid, title, desc, status, severity, author, time_created, time_updated }) {

  const dispatch = useDispatch()

  return (
    <div className='task task--task'
      // Set clicked task as the active task in editor
      onClick={() => dispatch(setActiveTask(uid))}
    >
      <div className="task__uid">#{uid}</div>
      <div className="task__title">{title}</div>
      <div>Description: {desc}</div>
      <div className="task__severity">{severity}</div>
      <div className="task__status">{status}</div>
      {/* <div className="task__author">{author}</div> */}
      <div className="task__updated">{printDate(time_updated)}</div>
      <div className="task__created">{printDate(time_created)}</div>
    </div>
  )
}