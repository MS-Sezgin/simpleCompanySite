import Home from './components/Home'
import './css/css.css'
import React, { Component } from 'react'


export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}
export default (App)