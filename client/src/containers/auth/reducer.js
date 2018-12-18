/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import Immutable from 'immutable';

import {USER_LOG_OUT, USER_LOGGED_IN} from "./actions";

const initialState = Immutable.fromJS({
    user: {},
    authenticated: false,
});

export default (state = initialState, action = {}) => {

    switch (action.type) {

        /**
         * user login to the system
         */
        case USER_LOGGED_IN: {
            const {user} = action;

            state = state.merge({user}).set('authenticated', true);

            break;
        }
        /**
         * user logout from the system
         */
        case USER_LOG_OUT: {

            state = state.set('authenticated', false).set('user', {});

            break;
        }

        default:
    }

    return state;
}
