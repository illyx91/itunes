/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import { combineReducers } from 'redux-immutable';
import auth from './containers/auth/reducer';
import home from './containers/home/reducer';
import users from './containers/management/reducer';


export default combineReducers({
    auth,
    home,
    users
});

