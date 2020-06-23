import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App'
import './index.css'
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
