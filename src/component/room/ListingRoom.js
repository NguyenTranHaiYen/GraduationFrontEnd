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

    constructor(props) {
        super(props);
        this.state = {
            dataFilter: {
                keyWords: "",
                acreage: 0,
                isHasWifi: false,
                isHasParkingSlot: false,
                isHasPrivateToilet: false,
                district: "",
                streetId: "",
                averagePrice: "",
                categoryRoomId: "",
                post: "",
                sortPrice: "",
                sortAcreage: "",
                loading: false
            }
        };
    }
    handleOnChangeFilter = (e) => {
        // this case for input
        if (!!e.target) {
            const current = e.target;
            this.setState({ dataFilter: { ...this.state.dataFilter, [current.name]: current.value } });
        }
        else {
            // this case for select
            this.setState({ dataFilter: { ...this.state.dataFilter, [e.name]: e.value } });
        }
    }
    handleCheckBoxOnChange = (e) => {
        this.setState({ dataFilter: { ...this.state.dataFilter, [e.target.name]: e.target.checked } });
    }
    // getListPost = (e) => {
    //     e.preventDefault();
    //     RoomService.getListRoom(this.state.dataFilter);
    // }

    render() {
        console.log(this.state)
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
                                                    <img src={suitcase} alt="true" /><span>Nhanh Chóng</span></div>
                                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                    <img src={island} alt="true" />Chất Lượng</div>
                                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                    <img src={cruise} alt="true" />Uy Tín</div>
                                                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                                    <img src={diving} alt="true" />Ưu Đãi Hấp Dẫn</div>
                                            </div>
                                        </div>
                                        <div className="active">
                                            <form action="#" id="search_form_1" className="search_panel_content">
                                                <div className="row">
                                                    <div className="search_item col-lg-6">
                                                        <div>Tìm Kiếm</div>
                                                        <input name="keyWords" type="text" className="destination search_input" onChange={this.handleOnChangeFilter} />
                                                    </div>
                                                    <div className="search_item col-lg-2">
                                                        <div>Diện Tích</div>
                                                        <select name="acreage" id="acreage" className="dropdown_item_select search_input" onChange={this.handleOnChangeFilter}>
                                                            <option value={0}>nhỏ hơn 20m2</option>
                                                            <option value={20}> &gt;= 20m2</option>
                                                            <option value={40}> &gt;= 40m2</option>
                                                            <option value={60}> &gt;= 60m2</option>
                                                        </select>
                                                    </div>
                                                    <div className="extras col-lg-4 text-right">
                                                        <ul className="search_extras clearfix row">
                                                            <li className="search_extras_item col-lg-4">
                                                                <div className="clearfix">
                                                                <input name="isHasWifi" type="checkbox" id="search_extras_3" className="search_extras_cb" onChange={this.handleCheckBoxOnChange} />
                                                                    <label htmlFor="search_extras_3">Có Wifi</label>
                                                                </div>
                                                            </li>
                                                            <li className="search_extras_item col-lg-4">
                                                                <div className="clearfix">
                                                                <input name="isHasParkingSlot" type="checkbox" id="search_extras_5" className="search_extras_cb" onChange={this.handleCheckBoxOnChange} />
                                                                    <label htmlFor="search_extras_5">Nơi Để Xe</label>
                                                                </div>
                                                            </li>
                                                            <li className="search_extras_item col-lg-4">
                                                                <div className="clearfix">
                                                                <input name="isHasPrivateToilet" type="checkbox" id="search_extras_6" className="search_extras_cb" onChange={this.handleCheckBoxOnChange} />
                                                                    <label htmlFor="search_extras_6">Toilet riêng</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="search_item col-lg-4">
                                                        <div>Quận/ Huyện</div>
                                                        <select onChange={this.handleOnChangeFilter} name="district" id="district" className="dropdown_item_select search_input">
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
                                                        <select onChange={this.handleOnChangeFilter} name="streetId" id="streetId" className="dropdown_item_select search_input">
                                                            <option>0</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                        </select>
                                                    </div>
                                                    <div className="search_item col-lg-4">
                                                        <div>Khoảng Giá</div>
                                                        <select onChange={this.handleOnChangeFilter} name="averagePrice" id="streetId" id="price" className="dropdown_item_select search_input">
                                                            <option value={0}>nhỏ hơn 1 triệu</option>
                                                            <option value={1}> &gt;= 1 triệu</option>
                                                            <option value={2}>&gt;= 2 triệu</option>
                                                            <option value={3}>&gt;= 3 triệu</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
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
                                            <select onChange={this.handleOnChangeFilter} name="categoryRoomId" id="categoryRoomId" className="dropdown_item_select search_input filter_input">
                                                <option value={"0"}>Tất Cả</option>
                                                <option value={"1"}>Phòng Đơn</option>
                                                <option value={"2"}>Ở Ghép</option>
                                                <option value={"3"}>Nhà Nguyên Căn</option>
                                                <option value={"4"}>Chung Với Chủ</option>
                                            </select>
                                        </li>
                                        <li className="sorting_text">
                                            <span>Bài Đăng</span>
                                            <select onChange={this.handleOnChangeFilter} name="post" id="post" className="dropdown_item_select search_input filter_input">
                                                <option value={"0"}>Tất Cả</option>
                                                <option value={"1"}>Của Tôi</option>
                                                <option value={"2"}>Đã Lưu</option>
                                            </select>
                                        </li>
                                        <li className="sorting_text">
                                            <span>Giá</span>
                                            <select onChange={this.handleOnChangeFilter} name="sortPrice" id="priceSort" className="dropdown_item_select search_input filter_input">
                                                <option value={"ASC"}>Tăng Dần</option>
                                                <option value={"DES"}>Giảm Dần</option>
                                            </select>
                                        </li>  
                                        <li className="sorting_text">
                                            <span>Diện Tích</span>
                                            <select onChange={this.handleOnChangeFilter} name="sortAcreage" id="priceSort" className="dropdown_item_select search_input filter_input">
                                                <option value={"ASC"}>Tăng Dần</option>
                                                <option value={"DES"}>Giảm Dần</option>
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
