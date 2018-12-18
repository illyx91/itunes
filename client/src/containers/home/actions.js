/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import axios from '../../utils/axios'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const LOADING = 'LOADING';
export const TOP_TEN_SUCCESS = 'TOP_TEN_SUCCESS';

export function search(term) {
    return async (dispatch) => {
        dispatch({type: LOADING, loading :true});

        const res = await axios.get(`/tunes?name=${term}`);

        if (res && res.status === 200) {
            const {data :{results}} = res;

            dispatch({type: SEARCH_SUCCESS, results});

            dispatch({type: LOADING, loading: false});

        }
    }
}

export function getTopTen() {
    return async (dispatch) => {

        const res = await axios.get(`/tunes/popular`);

        if (res && res.status === 200) {

            const {data} = res;

            dispatch({type: TOP_TEN_SUCCESS, data});

        }
    }
}