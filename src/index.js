import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import  Routes  from './routes/routes'
import './index.css'
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
