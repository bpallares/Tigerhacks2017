import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SystemControl from '../src/SystemControl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <SystemControl />
      </MuiThemeProvider>
    )
  }
}

export default App
