import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
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
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer