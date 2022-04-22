import React from 'react'

export default function Task({uid, title, status, priority}) {
  return (
    <div>
      Task: {title} || {status} || {priority} || {uid}
    </div>
  )
}
