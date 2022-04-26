import React, { useEffect, useState } from 'react'
import Task from '../components/Task'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, fetchTasks, postTask } from '../features/taskSlice'

export default function Home() {

  const [taskJSON, setTasks] = useState('[]')

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])


  const getTasks = async () => {
    let response = await fetch('http://localhost:3001/tasks/get-all-tasks', {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-control-request-headers": "content-type",
        "x-Trigger": "CORS",
      }
    })
    let responseJSON = await response.json()
    setTasks(responseJSON)
    console.log(responseJSON)
    return responseJSON
  }

  useEffect(() => {
    getTasks()
  }, [])


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
      {/* <button
        onClick={() => dispatch(addTask(
          {
            uid: 5,
            title: newTask.title,
            status: 'completed',
            priority: 'high'
          }
        ))}
      >Add Task</button> */}

      <br />

      {/* <button
        onClick={() => {
          getTasks()
        }}
      >React Async</button> */}

      <button
      onClick={() => dispatch(postTask(testTask))}
      >  Post Task</button>

      <br />

      <button
        onClick={() => dispatch(fetchTasks())}
      >Fetch Tasks</button>

      <br />

  
    </div>

  )
}


