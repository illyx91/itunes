/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss'
import {selectTrack} from "./selectors";
import {toJS} from "../to-js/index";

const TRACK_TYPES = {
    SONG: 'song',
    VIDEO: 'music-video'
};

function mapStateToProps(state, ownProps) {
    const {match: {params: {trackId}}} = ownProps;

    return {
        track: selectTrack(state, trackId)
    }
}

class Track extends Component {


    render() {

        const {track} = this.props;

        return (
            <div id="track">
                {
                    track.kind === TRACK_TYPES.SONG
                        ?
                        <audio src={track.previewUrl}
                               controls/>
                        :
                        track.kind === TRACK_TYPES.VIDEO
                            ?
                            <video src={track.previewUrl} width="500" height="400" controls/>
                            :
                            null
                }
                <label>{track.trackName}</label>
            </div>
        )
    }

}

Track.propTypes = {
    track: PropTypes.object
};


export default connect(mapStateToProps)(toJS(Track))