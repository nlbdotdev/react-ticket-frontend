import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'
import { getDate } from '../middleware/datetime'
import Select from 'react-select';

// Export and import these, could put in store

// do time and ID automatically, accept other fields
// make severity and status enums
// on post > fetch up to date task list, so you have an accurate ID, use that id, and fetch time...
// you could have a server state management to prevent multiple bugs from submitting... e.g: adding bug status

export default function NewTask() {

  const tempDate = new Date()
  const dispatch = useDispatch()

  const statusOptions = (useSelector(state => state.task.statusOptions))
  const severityOptions = (useSelector(state => state.task.severityOptions))

  const [newTask, setNewTask] = useState({
    title: 'New Task',
    desc: 'this is a description',
    severity: 'B',
    status: 'incomplete',
    time_created: tempDate,
    time_updated: tempDate,
  })

  // This middleware function will be redundant w/ timestamps
  const submitTask = async () => {

    const currentTime = await getDate()

    setNewTask({
      ...newTask,
      time_created: currentTime,
      time_updated: currentTime
    })

    console.log('hello')
    dispatch(postTask(newTask))
  }

  return (
    <div>

      <div>NEW TASK: </div>

      <div>
        <label>Title: </label>
        <input
          id='title'
          value={newTask.title}
          onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
        ></input>
      </div>

      <div>
        <label>Description: </label>
        <textarea
          id='desc'
          value={newTask.desc}
          onChange={e => setNewTask({ ...newTask, [e.target.id]: e.target.value })}
        />
      </div>


      <div>
        <label>Status: </label>
         <Select
          name="status"
          value={{
            label: newTask.status,
            value: newTask.status
          }}
          onChange={e => setNewTask({ ...newTask, "status": e.value })}
          options={statusOptions}
        />
      </div>

      <div>
        <label>Severity: </label>
        <Select
          name="severity"
          value={{
            label: newTask.severity,
            value: newTask.severity
          }}
          onChange={e => setNewTask({ ...newTask, "severity": e.value })}
          options={severityOptions}
        />
      </div>

      <button
        onClick={() => submitTask()}
      >  Post Task</button>
    
    </div>
  )
}
