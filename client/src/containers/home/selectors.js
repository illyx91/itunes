/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import {createSelector} from 'reselect'

const selectHome = (state)=> state.get('home');

export const selectResults = createSelector(
    [selectHome],
    (home) => home.get('results')
);

export const selectLoading = createSelector(
    [selectHome],
    (home) => home.get('loading')
);
export const selectTopTen = createSelector(
    [selectHome],
    (home) => home.get('topTen')
);