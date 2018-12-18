/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import Immutable from 'immutable';
import {GET_USERS_SUCCESS} from "./actions";


const initialState = Immutable.fromJS({
    users: []
});

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case GET_USERS_SUCCESS: {
            const {users} = action;

            state = state.set('users', Immutable.fromJS(users));

            break;
        }


        default:
    }

    return state;
}
