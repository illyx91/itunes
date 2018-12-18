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
import {getTopTen, search} from "./actions";
import {selectLoading, selectResults, selectTopTen} from "./selectors";
import Results from "../../components/results/index";
import {toastError} from "../auth/actions";
import {toJS} from "../to-js/index";

const mapDispatchToProps = (dispatch) => ({
    search: (term) => dispatch(search(term)),
    getTopTen: (term) => dispatch(getTopTen(term)),
    toastError: (message) => dispatch(toastError(message)),
});

function mapStateToProps(state) {
    return {
        results: selectResults(state),
        loading: selectLoading(state),
        topTen: selectTopTen(state),
    }
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onItemSelect = this.onItemSelect.bind(this);
        this.getTopTen = this.getTopTen.bind(this);
        this.goToManagementPage = this.goToManagementPage.bind(this);
    }

    onInputChange(e) {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    submit(e) {
        e.preventDefault();

        const {search, toastError} = this.props;

        const {term} = this.state;

        if (term.length) {
            search(term);
        } else {
            toastError("Search term can't be empty");
        }
    }

    /**
     * get top ten searched
     * @param e
     */
    getTopTen(e) {
        e.preventDefault();

        const {getTopTen} = this.props;

        getTopTen();
    }

    /**
     * go to management page
     * @param e
     */
    goToManagementPage(e) {
        e.preventDefault();

        const {history} = this.props;

        history.push('/management');
    }

    /**
     * go to track page
     * @param trackId
     */
    onItemSelect(trackId) {
        this.props.history.push(`/track/${trackId}`)
    }

    render() {
        const {term} = this.state;

        const {results, loading, topTen} = this.props;

        return (
            <div id="home">
                <form onSubmit={this.submit} className="home-form">
                    <input name="term"
                           value={term}
                           type="text"
                           placeholder="Name of a song"
                           onChange={this.onInputChange}/>
                    <button type="submit">Search</button>
                    <button onClick={this.getTopTen}>Top 10 searches</button>
                    <button onClick={this.goToManagementPage}>Manage Users</button>
                </form>
                {topTen.length ?
                    <div id="top-ten">
                        {
                            topTen.map((term, i) => <div key={`term-${i}`}>
                                <label>{term.name}: {term.count}</label>
                            </div>)
                        }
                    </div>
                    : null
                }
                {loading ?
                    <div id="loader">
                        <img alt="" src={require('../../assets/Eclipse.svg')}/>
                    </div>
                    :
                    <Results results={results} onItemSelect={this.onItemSelect}/>
                }
            </div>
        )
    }

}

Home.propTypes = {
    search: PropTypes.func,
    getTopTen: PropTypes.func,
    toastError: PropTypes.func,
    results: PropTypes.array,
    loading: PropTypes.bool,
    topTen: PropTypes.array,
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home))