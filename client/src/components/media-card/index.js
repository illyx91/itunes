/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss'


class MediaCard extends Component {

    render() {
        const {data, onSelect} = this.props;

        const {trackId, artistName, trackName, artworkUrl100} = data;

        return (
            <div className="media-card" onClick={onSelect.bind(null,trackId)}>
                <img src={artworkUrl100} alt=""/>
                <label>{artistName}</label>
                <label>{trackName}</label>
            </div>
        )
    }

}

MediaCard.propTypes = {
    data: PropTypes.object,
    onSelect: PropTypes.func,
};


export default MediaCard