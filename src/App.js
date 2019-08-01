import React from 'react'
import './App.scss'
import 'normalize.css'
import Layout from './components/layout/Layout'
import Register from './components/auth/Register'
import store from './store/store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>Flash Study</h1>
        <AppRouter />
      </header>
    </div>
  </Provider>
)

export default App
