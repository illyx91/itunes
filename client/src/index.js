import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store';
import {Route, Router} from 'react-router-dom';
import history from "./history";
import Login from './containers/auth'
import isAuthenticated from './containers/auth-check';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="app-wrap">
                <ToastContainer autoClose={3000}/>
                <Route exact path="/login" component={Login}/>
                <Route component={isAuthenticated(App)}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
