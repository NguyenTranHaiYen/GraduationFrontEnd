import React, { Component } from 'react';
import '../single/single_listing_styles.css';
import '../single/single_listing_responsive.css';
import '../signup/contact_styles.css';
import '../signup/contact_responsive.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default class PostDetail extends Component {
    render() {
        return (
            <div>
                <div className="super_container mb-5">
                    <Header></Header>
                    <div className="home">
                        <div className="home_background parallax-window" />
                        <div className="home_content">
                            <div className="home_title">Tìm Phòng</div>
                        </div>
                    </div>
                    <div className="offers mt-5">
                        <div className="col-lg-12">
                            <div className="contact_form_container">
                                <div className="card-header">
                                    <strong className="contact_title text-center">Đăng Bài</strong>
                                </div>
                                <div className="card-body card-block">
                                    <form action method="post" encType="multipart/form-data" className="form-horizontal">
                                        <div className="row form-group">
                                            <div className="col-3 col-md-3"><label htmlFor="text-input" className=" form-control-label">Tiêu Đề</label></div>
                                            <div className="col-9 col-md-9"><input type="text" id="text-input" name="text-input" placeholder="Nhập Tiêu Đề" className="form-control" /><small className="form-text text-muted">This is a help text</small></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor className=" form-control-label">Diện tích</label>
                                            </div>
                                            <div className="col-12 col-md-9"><input id="email-input" name="email-input" placeholder="Nhập Diện Tích" className="form-control" /><small className="help-block form-text">Please enter</small></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor className=" form-control-label">Giá Phòng</label>
                                            </div>
                                            <div className="col-12 col-md-9"><input id="email-input" name="email-input" placeholder="Nhập Giá Phòng" className="form-control" /><small className="help-block form-text">Please enter</small></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor className=" form-control-label">Giá Điện</label>
                                            </div>
                                            <div className="col-12 col-md-9"><input id="email-input" name="email-input" placeholder="Nhập Giá Điện" className="form-control" /><small className="help-block form-text">Please enter</small></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor className=" form-control-label">Giá Nước</label>
                                            </div>
                                            <div className="col-12 col-md-9"><input id="email-input" name="email-input" placeholder="Nhập Giá Nước" className="form-control" /><small className="help-block form-text">Please enter</small></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="textarea-input" className=" form-control-label">Mô Tả</label></div>
                                            <div className="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows={9} placeholder="Nội dung..." className="form-control" defaultValue={""} /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Wifi</label></div>
                                            <div className="col col-md-9">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1" className="form-check-label">
                                                            <input type="checkbox" id="checkbox1" name="checkbox1" defaultValue="option1" className="form-check-input" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Nhà Vệ Sinh</label></div>
                                            <div className="col col-md-9">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1" className="form-check-label ">
                                                            <input type="checkbox" id="checkbox1" name="checkbox1" defaultValue="option1" className="form-check-input" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Nơi Để Xe</label></div>
                                            <div className="col col-md-9">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1" className="form-check-label ">
                                                            <input type="checkbox" id="checkbox1" name="checkbox1" defaultValue="option1" className="form-check-input" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="select" className=" form-control-label">Loại Phòng</label>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <select name="select" id="select" className="form-control">
                                                    <option value={0}>Please select</option>
                                                    <option value={1}>Phòng Đơn</option>
                                                    <option value={2}>Ở Ghép</option>
                                                    <option value={3}>Nhà Nguyên Căn</option>
                                                    <option value={3}>Ở Chung Với Chủ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="select" className="form-control-label">Quận Huyện</label>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <select name="select" id="select" className="form-control">
                                                    <option value={0}>Please select</option>
                                                    <option value={1}>Phòng Đơn</option>
                                                    <option value={2}>Ở Ghép</option>
                                                    <option value={3}>Nhà Nguyên Căn</option>
                                                    <option value={3}>Ở Chung Với Chủ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="select" className=" form-control-label ">Đường</label>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <select name="select" id="select" className="form-control">
                                                    <option value={0}>Please select</option>
                                                    <option value={1}>Phòng Đơn</option>
                                                    <option value={2}>Ở Ghép</option>
                                                    <option value={3}>Nhà Nguyên Căn</option>
                                                    <option value={3}>Ở Chung Với Chủ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="file-multiple-input" className=" form-control-label">Hình Ảnh</label></div>
                                            <div className="col-12 col-md-9"><input type="file" id="file-multiple-input" name="file-multiple-input" multiple className="form-control-file contact_form_name input_field" /></div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="button search_button post_button">Tạo Bài Đăng<span /><span /><span /></button>
                                    <button className="button search_button post_button">Hủy Bỏ<span /><span /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
