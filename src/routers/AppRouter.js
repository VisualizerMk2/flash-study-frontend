import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../components/auth/Register'

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
