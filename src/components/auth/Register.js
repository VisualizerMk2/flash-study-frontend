import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import Layout from '../layout/Layout'
import { register } from '../../actions/auth'

const Register = ({ values, isSubmitting }) => {
  return (
    <div>
      <Form>
        <div>
          <Field type="name" name="username" placeholder="Username" />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button disabled={isSubmitting}>Submit</button>
      </Form>
    </div>
  )
}

const FormikRegister = withFormik({
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
      props: { register },
    }
  ) {
    register(values)
    resetForm()
  },
})(Register)

Register.propTypes = {
  register: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(
  mapStateToProps,
  { register }
)(FormikRegister)
