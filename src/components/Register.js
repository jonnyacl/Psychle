import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../actions/authenticate'
import TextItem from './common/TextItem'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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
    // const {errors, isValid} = validateInput(this.state);
  }

  onSubmit (e) {
    e.preventDefault();
    this.setState({errors: {}, isLoading: true});
    this.props.register(this.state)
      .then(
        (res) => {
          // add success/welcome message
        }, (err) => this.setState({errors: err, isLoading: false})
      )
    
  }

  render () {
    const { errors, isLoading } = this.state
    return (
      <form className="loginform" onSubmit={this.onSubmit}>

        {errors.form && <div className='alert error'>{errors.form}</div>}

        <TextItem
          error={errors.firstName}
          label='First name'
          onChange={this.onChange}
          value={this.state.firstName}
          field='firstName'
        />

        <TextItem
          error={errors.lastName}
          label='Last name'
          onChange={this.onChange}
          value={this.state.lastName}
          field='lastName'
        />

        <TextItem
          error={errors.email}
          label='Email address'
          onChange={this.onChange}
          value={this.state.email}
          field='email'
        />
        
        <TextItem
          error={errors.username}
          label='Username'
          onChange={this.onChange}
          value={this.state.username}
          field='username'
        />

        <TextItem
          error={errors.password}
          label='Password'
          onChange={this.onChange}
          value={this.state.password}
          field='password'
          type='password'
        />

        <div>
          <button className='button large lightblue login' disabled={isLoading}>Sign up</button>
        </div>
      </form>
    )
  }
}

const { func, object } = PropTypes

LoginForm.propTypes = {
  register: func.isRequired
}

LoginForm.contextTypes = {
  router: object.isRequired
}

export default connect(null, { register })(LoginForm)