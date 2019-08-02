import React from 'react'
import './App.scss'
import 'normalize.css'
import configureStore, { history } from './store/configureStore'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import Layout from './components/layout/Layout'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import Register from './components/auth/Register'
import Landing from './components/layout/Landing'
import Test from './components/layout/Test'

const store = configureStore()
const App = () => (
  <Layout>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Layout>
)

export default App
