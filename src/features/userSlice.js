import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Needs to be updated
let url = ''

if (process.env.REACT_APP_DEV_ENV === "local") {
    // url = 'http://localhost:3001/api'
    url = 'https://react-ticket-backend.vercel.app/api'
} else if (process.env.REACT_APP_DEV_ENV === "heroku") {
    // url = 'https://react-ticket-server.herokuapp.com'
    url = 'https://react-ticket-backend.vercel.app/api'
} else (
    // url = 'http://localhost:3001/api'
    url = 'https://react-ticket-backend.vercel.app/api'
)

const initialState = {
    activeUser: {
        firstName: "Nathan",
        lastName: "Bennett",
        username: "Nate",
        email: "nathan@gmail.com",
        password: "somethingencrypted"
    },
    token: 'tokenstring',
    error: null,
    message: null
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = (action.payload)
        }
    },
    extraReducers(builder) {
        builder
            // fetchUsers
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.Users = action.payload
                console.log(action.payload)
                console.log("Fetch Users Fufilled!")
            })
            .addCase(fetchUsers.pending, (state, action) => {
                console.log("Fetch Users Pending")
                console.log(action.payload)
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.log("Fetch Users Rejected!")
            })
            // postUser
            // would prefer a responeType var or something over error vs success
            .addCase(createUser.fulfilled, (state, action) => {
                console.log("Post User Fufilled!")
                console.log('payload:', action.payload)
                if (action.payload.error != undefined) {
                    state.error = action.payload.error
                } else {
                    state.message = action.payload.message
                }
                // dispatch(fetchUsers())
            })
            .addCase(createUser.pending, (state, action) => {
                console.log("Post User Pending")
            })
            .addCase(createUser.rejected, (state, action) => {
                console.log("Post User Rejected!")
            })

            // --- Log in user ---
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Login User Fufilled!")
                console.log('payload:', action.payload)
                if (action.payload.error != undefined) {
                    state.error = action.payload.error
                } else {
                    state.message = action.payload.message
                }
                // dispatch(fetchUsers())
            })
            .addCase(loginUser.pending, (state, action) => {
                console.log("Login User Pending")
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Login User Rejected!")
                console.log('payload:', action.payload)
            })


            // updateUser
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log("Update User Fufilled!")
                console.log(action.payload)
                // dispatch(fetchUsers())
            })
            .addCase(updateUser.pending, (state, action) => {
                console.log("Update User Pending")
            })
            .addCase(updateUser.rejected, (state, action) => {
                console.log("Update User Rejected!")

            })
    }
})

// router.post('/create-user', checkIsEmpty, validateCreateData, createUser)
// router.post('/login', validateEmail, userLogin)
// router.put('/update-profile', jwtMiddleware, checkIsEmpty, validateUpdateData, updateProfile)

// NOT ACTIVE
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await fetch(`${url}/users/get-all-Users`, {
        mode: "cors",
        method: "GET"
    })

    let responseJSON = await response.json()
    return responseJSON
})

export const createUser = createAsyncThunk('user/postUser', async (data) => {
    const response = await fetch(`${url}/users/create-user`, {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data)
    })

    console.log(data)

    let responseJSON = await response.json()
    return responseJSON
})

export const loginUser = createAsyncThunk('/user/login', async (data) => {
    const response = await fetch(`${url}/users/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data)
    })

    console.log(data)

    let responseJSON = await response.json()
    return responseJSON
})

export const updateUser = createAsyncThunk('user/updateUser', async (data) => {
    const response = await fetch(`${url}/users/update-User`, {
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

export const { setToken } = UserSlice.actions
export default UserSlice.reducer