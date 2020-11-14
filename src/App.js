import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';
import Index from './component/index/Index';
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
        showModeratorBoard: user.roles.includes("ROLE_USER"),
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
            {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav mr-auto">

                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/create-post"} className="nav-link">
                      Moderator Board
                  </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                  </Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                  </Link>
                  </li>
                )}
              </div>

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/signin" className="nav-link" onClick={this.logOut}>
                      LogOut
                  </a>
                  </li>
                </div>
              ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/signin"} className="nav-link">
                        signin
                  </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/signup"} className="nav-link">
                        Sign Up
                  </Link>
                    </li>
                  </div>
                  <Header></Header>
                )}
            </nav> */}

            <div>
              <Switch>
                <Route exact path={["/", "/home"]} component={Index} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/list-room" component={ListingRoom} />
                <Route path="/single" component={SingleListingPage} />
                <Route path="/create-post" component={PostDetail} />
                <Route path="/admin" component={AdminIndex} />
              </Switch>
            </div>
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