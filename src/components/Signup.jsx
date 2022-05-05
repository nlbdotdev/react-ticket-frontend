import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../features/userSlice'


export default function Signup() {

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
      <h1>Sign Up:</h1>


      <div>{signupError && error.firstName != undefined ? `Error: ${error.firstName}` : ""}</div>

      <div>
        <label>First Name: </label>
        <input
          id='firstname'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}></input>

      </div>

      <div>{signupError && error.lastName != undefined ? `Error: ${error.lastName}` : ""}</div>

      <div>
        <label>Last Name: </label>
        <input
          id='lastname'
          value={lastName}
          onChange={e => setLastName(e.target.value)}></input>
      </div>

      <div>{signupError && error.username != undefined ? `Error: ${error.username}` : ""}</div>

      <div>
        <label>User Name: </label>
        <input
          id='username'
          value={username}
          onChange={e => setUsername(e.target.value)}></input>
      </div>

      <div>{signupError && error.email != undefined ? `Error: ${error.email}` : ""}</div>

      {/* Email validation is lacking */}

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
          id="signup"
          onClick={e => dispatch(createUser(
            {
              firstName: firstName,
              lastName: lastName,
              username: username,
              email: email,
              password: password
            }
          ))}
        >Sign Up!</button>

        <div>{message}</div>


      </div>




    </div>
  )
}
