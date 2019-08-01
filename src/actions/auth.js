import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types'

export const register = ({ name, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ name, password })

  try {
    const res = await axios.post('/auth/signup', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })
    console.log(res)
    // dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}
