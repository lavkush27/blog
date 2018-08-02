import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
ReactDOM.render(
    <div>
        <header className="headerContainer">BLOG POST</header>
        <Provider store={store}>
            <App />
        </Provider>
    </div>, document.getElementById('root'));
registerServiceWorker();
