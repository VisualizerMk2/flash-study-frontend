import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import { login, logout } from '../../actions/auth'

const Login = ({ values, isSubmitting, logout }) => {
  return (
    <div>
      <Form>
        <div>
          <Field type="name" name="username" placeholder="Username" />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button disabled={isSubmitting}>Login</button>
      </Form>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit(
    values,
    {
      resetForm,
      setSubmitting,
      props: { login },
    }
  ) {
    login(values)
    resetForm()
    setSubmitting(false)
  },
})(Login)

Login.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { login, logout }
)(FormikLogin)
