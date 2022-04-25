import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    },
    extraReducers(builder) {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
            console.log("Fetch Tasks Fufilled!")
        })
            .addCase(fetchTasks.pending, (state, action) => {
                console.log("Fetch Tasks Pending")
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                console.log("Fetch Tasks Rejected!")
            })
    }
})

export const fetchTasks = createAsyncThunk('task/fetchTasks', async () => {
    const response = await fetch('http://localhost:3001/tasks/get-all-tasks')
    let responseJSON = response.json()
    console.log(responseJSON)
    return responseJSON
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer