import React from 'react'
import Task from '../components/Task'
import { fetchTasks, setActiveTask } from '../features/taskSlice';
import { useDispatch } from 'react-redux';

export default function Tasks({ tasks }) {

    const dispatch = useDispatch()



    return (
        <div>Tasks Page:



            <button
                onClick={() => dispatch(fetchTasks())}
            >Fetch Tasks</button>
            <br />

            |{" "}

            <button
                onClick={() => dispatch(setActiveTask(-1))}
            >+</button>
            <br />


            <div className='tasks'>
                <div className="task__uid">ID</div>
                <div className="task__title">Title</div>
                <div>Description</div>
                <div className="task__severity">Severity</div>
                <div className="task__status">Status</div>
                <div className="task__updated">Time Updated</div>
                <div className="task__created">Time Created</div>
            </div>

            {tasks.map((task, idx) =>
                <Task
                    key={`task-${idx}`}
                    {...task}
                />
            )}
        </div>
    )
}