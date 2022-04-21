import React from 'react'

export default function Task(props) {

  const {uid, title, status, priority} = props

  return (
    <div>
      Task: {title} || {status} || {priority} || {uid}
    </div>
  )
}
