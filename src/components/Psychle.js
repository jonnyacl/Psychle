import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import LoginForm from './LoginForm';
import { Register } from './Register';

const Psychle = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' component= {App} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={Register}/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

const { object } = PropTypes

Psychle.propTypes = {
  store: object
}

export default Psychle;
