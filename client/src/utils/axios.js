/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import axios from 'axios';
import store from './../store';
import {toastError, userLogOut} from "../containers/auth/actions";

export const baseURL = 'http://localhost:3001/api';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: localStorage.getItem('token')
    }
});

axiosInstance.interceptors.response.use(null, function (error) {

    const {message} = error.response.data;

    store.dispatch(toastError(message));

    if (error.response.status === 401) {
        store.dispatch(userLogOut());
    }
});

export default axiosInstance;