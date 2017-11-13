import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/authenticate'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  isValid () {
    
  }

  onSubmit (e) {
    
  }

  render () {
    const { errors, isLoading } = this.state
    return (
      <form className="loginform" onSubmit={this.onSubmit}>

        {errors.form && <div className='alert error'>{errors.form}</div>}

        {/* <TextFieldGroup
          error={errors.username}
          label='Username'
          onChange={this.onChange}
          value={this.state.username}
          field='username'
        />

        <TextFieldGroup
          error={errors.password}
          label='Password'
          onChange={this.onChange}
          value={this.state.password}
          field='password'
          type='password'
        /> */}

        <div>
          <button className='button large lightblue login' disabled={isLoading}>Login</button>
        </div>
      </form>
    )
  }

}

const { func, object } = PropTypes

LoginForm.propTypes = {
  login: func.isRequired
}

LoginForm.contextTypes = {
  router: object.isRequired
}

export default connect(null, { login })(LoginForm)