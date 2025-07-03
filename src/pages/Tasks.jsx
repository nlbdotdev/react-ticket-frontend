import React from 'react'
import Task from '../components/Task'
import { fetchTasks, setActiveTask } from '../features/taskSlice';
import { useDispatch } from 'react-redux';


export default function Tasks({ tasks }) {

    const dispatch = useDispatch()



    return (

        <div>


            <button
                onClick={() => dispatch(fetchTasks())}
            >Fetch Tasks</button>

            {" "}|{" "}

            <button
                onClick={() => dispatch(setActiveTask(-1))}
            >New Task</button>
            <br />


            <div className='task'>
                <div className="task__uid">ID</div>
                <div className="task__title">Title</div>
                <div>Description</div>
                <div className="task__severity">Severity</div>
                <div className="task__status">Status</div>
                <div className="task__updated">Time Updated</div>
                <div className="task__created">Time Created</div>
            </div>

            {Array.isArray(tasks) && tasks.length > 0 ? (
                tasks.map((task, idx) =>
                    <Task
                        key={`task-${idx}`}
                        {...task}
                    />
                )
            ) : (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    {Array.isArray(tasks) ? 'No tasks found' : 'Loading tasks...'}
                </div>
            )}
        </div>
    )
}