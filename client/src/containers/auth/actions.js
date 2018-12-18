/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import axios from '../../utils/axios'
import jwtdecode from 'jwt-decode';
import {toast} from 'react-toastify';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const USER_LOG_OUT = 'USER_LOG_OUT';

export function signUp(userData) {
    return async (dispatch) => {

        const res = await axios.post('/signup', {...userData});

        if (res && res.status === 201) {
            const {data: {token}} = res;

            localStorage.setItem('token', token);

            Object.assign(axios.defaults, {headers: {authorization: token}});

            const decodedAuth = jwtdecode(token);

            const {username} = decodedAuth;

            dispatch({type: USER_LOGGED_IN, username});
        }
    }
}

export function login(userData) {
    return async (dispatch) => {

        const res = await axios.post('/login', {...userData});

        if (res && res.status === 201) {

            const {data: {token}} = res;

            localStorage.setItem('token', token);

            Object.assign(axios.defaults, {headers: {authorization: token}});

            const decodedAuth = jwtdecode(token);

            const {username} = decodedAuth;

            dispatch({type: USER_LOGGED_IN, username});
        }
    }
}

export function userLogOut() {

    localStorage.removeItem('token');

    return {type: USER_LOG_OUT};
}

export function setAuth() {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedAuth = jwtdecode(token);

            const {username} = decodedAuth;

            dispatch({type: USER_LOGGED_IN, username});

        }

    }
}

export function toastError(message) {
    return (dispatch) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}

