import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/home';
import Track from './containers/track';
import Managment from './containers/management';

class App extends Component {
    render() {
        return (
            <div className="App" id="app-root">
                <Route>
                    <Switch>
                        <Route path="/track/:trackId" component={Track} />
                        <Route path="/management" component={Managment} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Route>
            </div>
        );
    }
}

export default connect()(App);
