/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import {createSelector} from 'reselect'
import {selectResults} from "../home/selectors";

const selectTrackWithId = (state, trackId) => trackId;

export const selectTrack = createSelector(
    [selectResults, selectTrackWithId],
    (results, trackId) => results.find((result)=> parseInt(result.get('trackId')) === parseInt(trackId))
);