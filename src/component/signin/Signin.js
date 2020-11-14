import React, { Component } from 'react';
import '../signup/contact_styles.css';
import '../signup/contact_responsive.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Signin extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }
    render() {
        const { isLoggedIn, message } = this.props;
        // if (isLoggedIn) {
        //     return <Redirect to="/profile" />;
        //   }

        return (
            <div className="contact_form_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Contact Form */}
                            <div className="contact_form_container">
                                <div className="contact_title text-center">Đăng Nhập</div>
                                <Form
                                    onSubmit={this.handleLogin}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                    className="contact_form text-center">
                                    <p htmlFor="username" className="text-white text-left">Username</p>
                                    <Input
                                        type="text"
                                        className="form-control contact_form_subject input_field"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required]}
                                        placeholder="Tên Đăng Nhập"
                                    />
                                    <p htmlFor="password" className="text-white text-left mt-3">Mật Khẩu</p>
                                    <Input
                                        type="password"
                                        className="form-control contact_form_subject input_field"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]}
                                        placeholder="Mật Khẩu"
                                    />
                                    <button className="form_submit_button button trans_200 mt-3"
                                        disabled={this.state.loading}
                                    >
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                    Đăng Nhập<span /><span /><span /></button>
                                    {message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={(c) => {
                                            this.checkBtn = c;
                                        }}
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Signin);
