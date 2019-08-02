import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../components/auth/Register'
import Landing from '../components/layout/Landing'

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
