import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';
import Index from './component/index/Index';
import Main from './component/main/Main';
import Signup from './component/signup/Signup.js';
import Signin from './component/signin/Signin.js';
import SingleListingPage from './component/single/SingleListingPage';
import ListingRoom from './component/room/ListingRoom';
import PostDetail from './component/detail-post/PostDetail';
import AdminIndex from './component/admin/AdminIndex';
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
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

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div>
        <Router history={history}>
          <div>
              <Switch>
                <Route exact path={["/", "/home"]} component={Main} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/list-room" component={ListingRoom} />
                <Route path="/single" component={SingleListingPage} />
                <Route path="/create-post" component={PostDetail} />
                <Route path="/admin" component={AdminIndex} />
              </Switch>
          </div>
        </Router>
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

export default connect(mapStateToProps)(App);