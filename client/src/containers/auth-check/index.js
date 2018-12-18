/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Login from '../auth';
import {setAuth} from "../auth/actions";
import {toJS} from "../to-js/index";

const mapDispatchToProps = (dispatch) => ({
    setAuth: () => dispatch(setAuth()),
});

export default function (ComposedClass) {
    class AuthenticationCheck extends PureComponent {

        componentDidMount() {
            if (!this.props.authenticated) {
                this.props.setAuth()
            }
        }

        render() {
            if (this.props.authenticated) {

                return <ComposedClass {...this.props}/>
            }
            return <Login/>
        }

    }

    function mapStateToProps(state) {
        return {
            authenticated: state.getIn(['auth', 'authenticated']),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(toJS(AuthenticationCheck))
}
