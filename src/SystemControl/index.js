import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from '../Pages/Home/index'

const SystemControl = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/e' component={Home} />
    </Switch>
  </Router>
)

export default SystemControl
