import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../components/auth/Register'
import Landing from '../components/layout/Landing'
import { history } from '../store/configureStore'
import { ConnectedRouter } from 'connected-react-router'

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default AppRouter
