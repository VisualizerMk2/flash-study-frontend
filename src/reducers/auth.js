import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.accessToken)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_SUCCESS:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
      }
    default:
      return state
  }
}
