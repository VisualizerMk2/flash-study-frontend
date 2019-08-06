import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from './types'
import { push } from 'connected-react-router'

export const register = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ username, password })

  try {
    const res = await axios.post('/auth/signup', body, config)
    console.log('success response', res)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })

    dispatch(push('/'))
  } catch (err) {
    const { statusCode } = err.response.data
    if (err.response.statusCode === 409) {
      console.log(err.response.data.message)
    } else {
      console.log(err.response.data.message)
    }

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ username, password })

  try {
    const res = await axios.post('/auth/signin', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    const { statusCode } = err.response.data
    const errors = err.response.data.errors

    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const logout = () => (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE })
  console.log('Logout initiated')
  dispatch({ type: LOGOUT })
}
