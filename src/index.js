import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Psychle from './components/Psychle';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';

const store = configureStore();

render(
    <Psychle store={store} />, document.getElementById('root')
);
registerServiceWorker();
