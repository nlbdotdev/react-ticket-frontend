import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let url = ''

if (process.env.REACT_APP_DEV_ENV === "local") {
    url = 'http://localhost:3001'
} else if (process.env.REACT_APP_DEV_ENV === "heroku") {
    url = 'https://react-ticket-server.herokuapp.com'
}

console.log('url:', url)
console.log(process.env.REACT_APP_DEV_ENV)

const initialState = {
    tasks: [],
    // UID of the task to edit, if it is -1, it is treated as a new task
    activeTask: -1,
    severityOptions: [
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' },
    ],
    statusOptions: [
        { value: 'open', label: 'open' },
        { value: 'in progress', label: 'in progress' },
        { value: 'blocked', label: 'blocked' },
        { value: 'regression', label: 'regression' },
        { value: 'closed', label: 'closed' },
        { value: 'reopen', label: 'reopen' },
    ]
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        setActiveTask: (state, action) => {
            state.activeTask = (action.payload)
        }
    },
    extraReducers(builder) {
        builder
            // fetchTasks
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload
                console.log(action.payload)
                console.log("Fetch Tasks Fufilled!")
            })
            .addCase(fetchTasks.pending, (state, action) => {
                console.log("Fetch Tasks Pending")
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                console.log("Fetch Tasks Rejected!")
            })
            // postTask
            .addCase(postTask.fulfilled, (state, action) => {
                console.log("Post Task Fufilled!")
                console.log(action.payload)
                // dispatch(fetchTasks())
            })
            .addCase(postTask.pending, (state, action) => {
                console.log("Post Task Pending")
            })
            .addCase(postTask.rejected, (state, action) => {
                console.log("Post Task Rejected!")

            })
            // updateTask
            .addCase(updateTask.fulfilled, (state, action) => {
                console.log("Update Task Fufilled!")
                console.log(action.payload)
                // dispatch(fetchTasks())
            })
            .addCase(updateTask.pending, (state, action) => {
                console.log("Update Task Pending")
            })
            .addCase(updateTask.rejected, (state, action) => {
                console.log("Update Task Rejected!")

            })
    }
})

export const fetchTasks = createAsyncThunk('task/fetchTasks', async () => {
    const response = await fetch(`${url}/tasks/get-all-tasks`, {
        mode: "cors",
        method: "GET"
    })

    let responseJSON = await response.json()
    return responseJSON
})

export const postTask = createAsyncThunk('task/postTask', async (data) => {
    const response = await fetch(`${url}/tasks/create-task`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "access-control-request-headers": "content-type",
            "x-Trigger": "CORS",
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data)
    })

    let responseJSON = await response.json()
    return responseJSON
})

export const updateTask = createAsyncThunk('task/updateTask', async (data) => {
    const response = await fetch(`${url}/tasks/update-task`, {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors",
        method: "PUT",
        body: JSON.stringify(data)
    })

    let responseJSON = await response.json()
    return responseJSON
})

export const { addTask, setActiveTask } = taskSlice.actions
export default taskSlice.reducer