import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, loginUser } from '../features/userSlice'

// Login should return First, Last, User Name and set in userSlice, also token
// Would submit token with tasks, then use that token to set the associated user account

export default function Login() {

    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [signupError, setSignupError] = useState(false)
  
    const error = useSelector(state => state.user.error)
    const message = useSelector(state => state.user.message)


    useEffect(() => {
      console.log('useEffect: ', error)
      if (error != null) {
        setSignupError(true)
      }
    }, [error])

    return (
        <div>

            <h1>Login:</h1>

            <div>{signupError && error.email != undefined ? `Error: ${error.email}` : ""}</div>


            <div>
                <label>Email: </label>
                <input
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>
            </div>

            <div>{signupError && error.password != undefined ? `Error: ${error.password}` : ""}</div>

            <div>
                <label>Password: </label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
            </div>

            <div>
                <button
                    onClick={e => dispatch(loginUser(
                        {
                            email: email,
                            password: password
                        }
                    ))}
                >Login</button>
            </div>

        </div>
    )
}
