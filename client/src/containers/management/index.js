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
import {deleteUser, getUsers} from "./actions";
import {selectUsers} from "./selectors";
import {toJS} from "../to-js/index";


const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(deleteUser(id)),
    getUsers: () => dispatch(getUsers()),
});

function mapStateToProps(state) {
    return {
        users: selectUsers(state),
    }
}

class Management extends Component {

    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        const {getUsers} = this.props;

        getUsers();
    }

    deleteUser(id) {
        const {deleteUser} = this.props;

        deleteUser(id);
    }

    render() {

        const {users} = this.props;

        return (
            <div id="management">
                <div className="users">

                    {
                        users.map((user, i) => <div key={`user-${i}`}>
                            <label>{user.username}</label>
                            <button onClick={this.deleteUser.bind(null, user._id)}>Delete</button>
                        </div>)
                    }
                </div>
            </div>
        )
    }

}

Management.propTypes = {
    users: PropTypes.array,
    deleteUser: PropTypes.func,
    getUsers: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Management))