import React from 'react';
import './style.css';
import './themify-icons.css';
import admin from '../../images/admin.jpg';
export default function AdminIndex() {
    return (
        <div>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <h3 className="menu-title">Quản Lí</h3>
                            <li className="active">
                                <a href="#" > <i className="menu-icon fa fa-laptop" />Thêm User</a>
                                <a href="#" > <i className="menu-icon fa fa-bars" />Danh Sách User</a>
                            </li>
                            <li className="active">
                                <a href="#" > <i className="menu-icon fa fa-table" />Thêm Phòng</a>
                                <a href="#" > <i className="menu-icon fa fa-table" />Danh Sách Phòng</a>
                            </li>
                            <h3 className="menu-title">Duyệt Bài Đăng</h3>
                            <li className="">
                                <a href="#"> <i className="menu-icon fa fa-tasks" />Duyệt Bài Đăng</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            <div id="right-panel" className="right-panel">
                <header id="header" className="header">
                    <div className="header-menu row">
                        <div className="col-sm-7">
                            <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks" /></a>
                            <div className="header-left">
                                <div className="dropdown for-message">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ti-email" />
                                        <span className="count bg-primary">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="user-area dropdown float-right">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="user-avatar rounded-circle" src={admin} alt="Sign Out" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="content mt-3">
                </div>
            </div>
        </div>

    )
}
