import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from '../reducers'
import { routerMiddleware } from 'connected-react-router'

const middleware = [thunk]

export const history = createBrowserHistory()

export default function configureStore(initialState = {}) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware, routerMiddleware(history))
    )
  )
  return store
}

// const store = createStore(
//   rootReducer(history),
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store
