import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

const options = {
    timeout: 5000
}
class Root extends Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        )
    }
}

render(<Root />, document.getElementById('root'))
registerServiceWorker();
