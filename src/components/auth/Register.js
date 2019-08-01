import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import Layout from '../layout/Layout'

const Register = ({ values, isSubmitting }) => {
  return (
    <Layout>
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
    </Layout>
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
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values)
    resetForm()
    setSubmitting(false)
  },
})(Register)

export default connect()(FormikRegister)
