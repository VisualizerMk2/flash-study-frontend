import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
      }
    case REGISTER_FAIL:
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
