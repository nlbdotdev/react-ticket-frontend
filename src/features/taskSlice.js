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
        builder
            // fetchTasks
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload
                console.log("Fetch Tasks Fufilled!")
            })
            .addCase(fetchTasks.pending, (state, action) => {
                console.log("Fetch Tasks Pending")
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                console.log("Fetch Tasks Rejected!")
            })
            // addTask
            .addCase(postTask.fulfilled, (state, action) => {
                console.log("Post Task Fufilled!")
                console.log(action.payload)
                // fetchTasks()
            })
            .addCase(postTask.pending, (state, action) => {
                console.log("Post Task Pending")
            })
            .addCase(postTask.rejected, (state, action) => {
                console.log("Post Task Rejected!")

            })
    }
})

export const fetchTasks = createAsyncThunk('task/fetchTasks', async () => {
    const response = await fetch(`${url}/tasks/get-all-tasks`, {
        mode: "cors",
        method: "GET"
    })
    let responseJSON = response.json()
    return responseJSON
})

export const postTask = createAsyncThunk('task/postTasks', async (data) => {
    console.log(data)
    const response = await fetch(`${url}/tasks/create-task`, {
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data)
    });
    let responseJSON = response.json()
    // console.log(responseJSON)

    return responseJSON
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer