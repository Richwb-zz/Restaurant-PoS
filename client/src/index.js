import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { SetSeatModal } from './components/Modals/SetSeatModal';


ReactDOM.render(<SetSeatModal/>, document.getElementById('root'));
registerServiceWorker();
