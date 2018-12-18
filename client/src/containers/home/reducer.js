/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import Immutable from 'immutable';
import {LOADING, SEARCH_SUCCESS, TOP_TEN_SUCCESS} from "./actions";


const initialState = Immutable.fromJS({
    results: [],
    activeResult: {},
    loading: false,
    topTen: []
});

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case SEARCH_SUCCESS: {
            const {results} = action;

            state = state.set('results', Immutable.fromJS(results));

            break;
        }
        case LOADING: {
            const {loading} = action;

            state = state.set('loading', loading);

            break;
        }
        case TOP_TEN_SUCCESS: {
            const {data} = action;

            state = state.set('topTen', Immutable.fromJS(data));

            break;
        }

        default:
    }

    return state;
}
