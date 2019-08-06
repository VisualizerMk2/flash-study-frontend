import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store/configureStore'

import Landing from '../components/layout/Landing'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default AppRouter
