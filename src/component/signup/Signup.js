import React, { Component } from 'react';
import './contact_styles.css';
import './contact_responsive.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const fullname = (value) => {
    if (value.length < 3 || value.length > 50) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 50 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

class Signup extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.state = {
            fullname: "",
            username: "",
            email: "",
            password: "",
            successful: false,
        };
    }

    onChangeFullname(e) {
        this.setState({
            fullname: e.target.value,
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
        console.log(this.state.username);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,
                    });
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const { message } = this.props;
        return (
            <div className="super_container">
                {/* Contact */}
                <div className="contact_form_section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Contact Form */}
                                <div className="contact_form_container">
                                    <div className="contact_title text-center">Đăng Kí</div>
                                    <Form
                                        onSubmit={this.handleRegister}
                                        ref={(c) => {
                                            this.form = c;
                                        }}
                                        className="contact_form text-center"
                                    >
                                        {!this.state.successful && (
                                            <div>
                                                <p htmlFor="fullname" className="text-white text-left">Họ Tên</p>
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_name input_field"
                                                    name="fullname"
                                                    value={this.state.username}
                                                    onChange={this.onChangeFullname}
                                                    validations={[required, fullname]}
                                                    placeholder="Họ Tên"
                                                />
                                                <p htmlFor="email" className="text-white text-left mt-3">Email</p>
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_email input_field"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    validations={[required, email]}
                                                    placeholder="Email"
                                                />
                                                <p htmlFor="username" className="text-white text-left mt-3">Username</p>
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_name input_field"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    validations={[required, vusername]}
                                                    placeholder="Họ Tên"
                                                />
                                                <p htmlFor="password" className="text-white text-left mt-3">Mật Khẩu</p>
                                                <Input
                                                    type="password"
                                                    className="form-control contact_form_subject input_field"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    validations={[required, vpassword]}
                                                    placeholder="Mật Khẩu"
                                                />
                                                <button id="form_submit_button" className="form_submit_button button trans_200">Đăng Kí<span /><span /><span /></button>
                                            </div>
                                        )}
                                        {message && (
                                            <div className="form-group">
                                                <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
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
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Signup);
