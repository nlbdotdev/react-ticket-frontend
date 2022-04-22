import Navbar from './components/Navbar';
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Todo</h1>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default App