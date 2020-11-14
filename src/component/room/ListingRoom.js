import React, { Component } from 'react';
import '../single/offers_styles.css';
import '../single/offers_responsive.css';
import suitcase from '../../images/suitcase.png';
import island from '../../images/island.png';
import cruise from '../../images/cruise.png';
import diving from '../../images/diving.png';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Post from '../post/Post';

export default class ListingRoom extends Component {
    render() {
        return (
            <div className="super_container">
            <Header></Header>
            <div className="home">
                <div className="home_background parallax-window" />
                <div className="home_content">
                    <div className="home_title">Tìm Phòng</div>
                </div>
            </div>
            <div className="offers">
                <div className="search">
                    <div className="search_inner">
                        <div className="container fill_height no-padding">
                            <div className="row fill_height no-margin carousel2">
                                <div className="col fill_height no-padding">
                                    <div className="search_tabs_container">
                                        <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                <img src={suitcase} alt /><span>Nhanh Chóng</span></div>
                                            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                <img src={island} alt />Chất Lượng</div>
                                            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                <img src={cruise} alt />Uy Tín</div>
                                            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                <img src={diving} alt />Ưu Đãi Hấp Dẫn</div>
                                        </div>
                                    </div>
                                    <div className="active">
                                        <form action="#" id="search_form_1" className="search_panel_content">
                                            <div className="row">
                                                <div className="search_item col-lg-6">
                                                    <div>Tìm Kiếm</div>
                                                    <input type="text" className="destination search_input" required="required" />
                                                </div>
                                                <div className="search_item col-lg-2">
                                                    <div>Diện Tích</div>
                                                    <select name="children" id="acreage" className="dropdown_item_select search_input">
                                                        <option>0</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                    </select>
                                                </div>
                                                <div className="extras col-lg-4 text-right">
                                                    <ul className="search_extras clearfix row">
                                                        <li className="search_extras_item col-lg-4">
                                                            <div className="clearfix">
                                                                <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
                                                                <label htmlFor="search_extras_3">Có Wifi</label>
                                                            </div>
                                                        </li>
                                                        <li className="search_extras_item col-lg-4">
                                                            <div className="clearfix">
                                                                <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
                                                                <label htmlFor="search_extras_5">Nơi Để Xe</label>
                                                            </div>
                                                        </li>
                                                        <li className="search_extras_item col-lg-4">
                                                            <div className="clearfix">
                                                                <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
                                                                <label htmlFor="search_extras_6">Totlet riêng</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="search_item col-lg-4">
                                                    <div>Quận/ Huyện</div>
                                                    <select name="adults" id="district" className="dropdown_item_select search_input">
                                                        <option>01</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                        <option>01</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                    </select>
                                                </div>
                                                <div className="search_item col-lg-4">
                                                    <div>Đường Phố</div>
                                                    <select name="children" id="street" className="dropdown_item_select search_input">
                                                        <option>0</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                    </select>
                                                </div>
                                                <div className="search_item col-lg-4">
                                                    <div>Khoảng Giá</div>
                                                    <select name="children" id="price" className="dropdown_item_select search_input">
                                                        <option>0</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="search_item col-lg-8">
                                                    <div>Đại Học</div>
                                                    <select name="children" id="street" className="dropdown_item_select search_input">
                                                        <option>0</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                    </select>
                                                </div>
                                                <button className="button search_button">search<span /><span /><span /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 temp_col" />
                        <div className="col-lg-11">
                            <div className="offers_sorting_container">
                                <ul className="offers_sorting">
                                    <li className="sorting_text">
                                        <div className="sorting_detail">
                                        <span>Loại Phòng</span>
                                        </div>
                                        <select name="price_sort" id="price_sort" className="dropdown_item_select search_input filter_input">
                                            <option>Tất Cả</option>
                                            <option>Phòng Đơn</option>
                                            <option>Ở Ghép</option>
                                            <option>Nhà Nguyên Căn</option>
                                            <option>Chung Với Chủ</option>
                                        </select>
                                    </li>
                                    <li className="sorting_text">
                                        <span>Bài Đăng</span>
                                        <select name="price_sort" id="price_sort" className="dropdown_item_select search_input filter_input">
                                            <option>Tất Cả</option>
                                            <option>Của Tôi</option>
                                            <option>Đã Lưu</option>
                                        </select>
                                    </li>
                                    <li className="sorting_text">
                                        <span>Giá</span>
                                        <select name="price_sort" id="price_sort" className="dropdown_item_select search_input filter_input">
                                            <option>Tăng Dần</option>
                                            <option>Giảm Dần</option>
                                        </select>
                                    </li>
                                    <li className="sorting_text">
                                        <span>Diện Tích</span>
                                        <select name="price_sort" id="price_sort" className="dropdown_item_select search_input filter_input">
                                            <option>Tăng Dần</option>
                                            <option>Giảm Dần</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Post></Post>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        )
    }
}
