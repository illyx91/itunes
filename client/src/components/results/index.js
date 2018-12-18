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
import MediaCard from "../media-card/index";


class Results extends Component {

    render() {
        const {results, onItemSelect} = this.props;

        return (
            <div id="results">
                {
                    results.map((result, i)=> <MediaCard
                        data={result}
                        key={`result-${i}`}
                        onSelect={onItemSelect}/>
                    )
                }
            </div>
        )
    }

}

Results.propTypes = {
    results: PropTypes.array,
    onItemSelect: PropTypes.func,
};


export default Results