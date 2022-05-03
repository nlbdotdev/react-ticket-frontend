import Navbar from './components/Navbar';
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default App