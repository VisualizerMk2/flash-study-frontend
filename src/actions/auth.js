import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types'
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
    // dispatch(loadUser())
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
