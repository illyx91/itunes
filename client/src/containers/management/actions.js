/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import axios from '../../utils/axios'

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export function getUsers(term) {
    return async (dispatch) => {

        const res = await axios.get(`/users`);

        if (res && res.status === 200) {

            const {data : {users}} = res;

            dispatch({type: GET_USERS_SUCCESS, users});

        }
    }
}
export function deleteUser(id) {
    return async (dispatch) => {

        const res = await axios.delete(`/users/${id}`);

        if (res && res.status === 200) {

            const {data : {users}} = res;

            dispatch({type: GET_USERS_SUCCESS, users});

        }
    }
}