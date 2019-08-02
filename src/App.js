import React from 'react'
import './App.scss'
import 'normalize.css'
import store from './store/store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import Layout from './components/layout/Layout'

const App = () => (
  <Layout>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Layout>
)

export default App
