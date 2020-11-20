import React, { Component } from 'react'
import Index from '../index/Index';
import AdminIndex from '../admin/AdminIndex';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message";
import { history } from '../../helpers/history';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }
    componentDidMount() {
        const user = this.props.user;
        
        if (user) {
            this.setState({
                currentUser: user,
                showUserBoard: user.roles.includes("ROLE_USER"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }
    render() {
        const { currentUser, showUserBoard, showAdminBoard } = this.state;
        return (
            <div>
                {showAdminBoard && (
                  <AdminIndex></AdminIndex>
                )}
                {(showAdminBoard)===false && (
                  <Index></Index>
                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Main);
