import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Psychle from './Components/Psychle/Psychle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Psychle />, document.getElementById('root'));
registerServiceWorker();
