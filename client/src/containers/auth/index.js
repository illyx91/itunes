/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss'
import {login, signUp} from "./actions";
import {toJS} from "../to-js/index";

const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUp(data)),
    login: (data) => dispatch(login(data)),
});

function mapStateToProps(state) {
    return {
        authenticated: state.getIn(['auth', 'authenticated']),
    }
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.login = this.login.bind(this);
    }

    onInputChange(e) {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    submit(e) {
        e.preventDefault();

        const {signUp} = this.props;

        signUp({...this.state});
    }

    login(e) {
        e.preventDefault();

        const {login} = this.props;

        login({...this.state});
    }

    render() {
        const {username, password} = this.state;

        return (
            <div id="login-page">
                <form onSubmit={this.submit} className="login-form">
                    <div className="inputs">
                        <input name="username"
                               value={username}
                               type="text"
                               placeholder="username"
                               onChange={this.onInputChange}/>
                        <input name="password"
                               value={password}
                               type="password"
                               placeholder="password"
                               onChange={this.onInputChange}/>
                    </div>
                    <div className="buttons">
                        <button type="submit">Sign Up</button>
                        <button onClick={this.login}>Login</button>
                    </div>
                </form>
            </div>
        )
    }

}

Login.propTypes = {
    signUp: PropTypes.func,
    login: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Login))