import React from 'react';
import '../index/main_styles.css';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header className="header">
                <div className="top_bar">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <div className="user_box ml-auto">
                                    <div className="user_box_login user_box_link">
                                        <Link to={"/signin"} className="nav-link mt-0 pt-0">
                                            Đăng Nhập
                                        </Link>
                                    </div>
                                    <div className="user_box_register user_box_link">
                                        <Link to={"/signup"} className="nav-link mt-0 pt-0">
                                            Đăng Kí
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col main_nav_col d-flex flex-row justify-content-start head">
                                <div className="logo_container">
                                    <div className="logo">
                                        <Link to={"/home"} className="nav-link mt-0 pt-0">
                                            <img src={logo} alt="true"/>PTIT-HCM
                                        </Link>
                                    </div>
                                </div>
                                <div className="main_nav_container ml-auto">
                                    <ul className="main_nav_list">
                                        <li className="main_nav_item">
                                            <Link to={"/home"} className="nav-link mt-0 pt-0 pb-0">
                                                Trang Chủ
                                            </Link>
                                        </li>
                                        <li className="main_nav_item">
                                            <Link to={"/list-room"} className="nav-link mt-0 pt-0 pb-0">
                                                Tìm Phòng
                                            </Link>
                                        </li>
                                        <li className="main_nav_item">
                                            <Link to={"/create-post"} className="nav-link mt-0 pt-0 pb-0">
                                                Đăng Tin
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
