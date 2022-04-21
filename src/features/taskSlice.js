import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            uid: 1,
            title: 'task one',
            status: 'completed',
            priority: 'high'
        },
        {
            uid: 2,
            title: 'task two',
            status: 'incompleted',
            priority: 'medium'
        },
        {
            uid: 3,
            title: 'task three',
            status: 'completed',
            priority: 'low'
        },
        {
            uid: 4,
            title: 'task four',
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