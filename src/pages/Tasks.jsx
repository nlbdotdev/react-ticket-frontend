import React from 'react'
import Task from '../components/Task'

export default function Tasks({tasks}) {
    return (
        <div>Tasks Page:

            {tasks.map((task, idx) =>
                <Task
                    key={`task-${idx}`}
                    {...task}
                />
            )}
        </div>
    )
}