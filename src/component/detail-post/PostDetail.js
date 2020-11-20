import React, { Component } from 'react';
import '../single/single_listing_styles.css';
import '../single/single_listing_responsive.css';
import '../signup/contact_styles.css';
import Service from '../../services/Service';
import '../signup/contact_responsive.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Textarea from "react-validation/build/textarea";
import Select from "react-validation/build/select";
import { connect } from "react-redux";
import { getDitricts, getStreetsByDistrict } from '../../actions/action';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Không được để trống!
            </div>
        );
    }
};
class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.state = {
            title: "",
            acreage: "",
            priceRoom: "",
            priceElectric: "",
            priceWater: "",
            description: "",
            wifi: false,
            toilet: false,
            parking: false,
            statusId: "",
            district: 1,
            streetId: "",
            categoryRoomId: 1,
            file: [],
            loading: false,
        };
    }
    onChangeFilter(e) {
        // for input
        if (!!e.target) {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            });
            if (e.target.name === "district") {
                const { dispatch } = this.props;
                dispatch(getStreetsByDistrict(e.target.value));
            }
        }
        //for select
        else {
            //for district
                this.setState({
                    ...this.state,
                    [e.name]: e.value
                });
        }
    }
    onChangeCheckbox(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked,
        });
    }
    onChangeFile(e) {
        this.setState({
            file: [...this.state.file, e.target.files[0]],
        });
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getDitricts());
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("===",prevState);
    //     if(prevState.district !== this.state.district){
        
    //     }
    // }


    render() {
        let districts = [];
        if (this.props.district !== undefined) districts = this.props.district;
        if (this.props.street !== undefined) console.log("this.props.street",this.props.street);
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
                                    <p className="contact_title text-center">Đăng Bài</p>
                                </div>
                                <div className="card-body card-block">
                                    <Form
                                        onSubmit={this.handleLogin}
                                        encType="multipart/form-data"
                                        ref={(c) => {
                                            this.form = c;
                                        }}
                                        className="contact_form text-center form-horizontal">
                                        <div className="row form-group">
                                            <div className="col-3 col-md-3"><p className=" form-control-label">Tiêu Đề</p></div>
                                            <div className="col-9 col-md-9">
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_subject input_field"
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={this.onChangeFilter}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Diện tích</p>
                                            </div>
                                            <div className="col-9 col-md-9">
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_subject input_field"
                                                    name="acreage"
                                                    value={this.state.acreage}
                                                    onChange={this.onChangeFilter}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Giá Phòng</p>
                                            </div>
                                            <div className="col-9 col-md-9">
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_subject input_field"
                                                    name="priceRoom"
                                                    value={this.state.priceRoom}
                                                    onChange={this.onChangeFilter}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Giá Điện</p>
                                            </div>
                                            <div className="col-9 col-md-9">
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_subject input_field"
                                                    name="priceElectric"
                                                    value={this.state.priceElectric}
                                                    onChange={this.onChangeFilter}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Giá Nước</p>
                                            </div>
                                            <div className="col-9 col-md-9">
                                                <Input
                                                    type="text"
                                                    className="form-control contact_form_subject input_field"
                                                    name="priceWater"
                                                    value={this.state.priceWater}
                                                    onChange={this.onChangeFilter}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p htmlFor="textarea-input" className=" form-control-label">Mô Tả</p></div>
                                            <div className="col-12 col-md-9">
                                                <Textarea
                                                    name='description'
                                                    validations={[required]}
                                                    value={this.state.description}
                                                    onChange={this.onChangeFilter}
                                                    rows={9}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Wifi</p>
                                            </div>
                                            <div className="col col-md-9">
                                                <div className="form-check ">
                                                    <div className="checkbox">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-control contact_form_subject input_field form-check-input"
                                                            name="wifi"
                                                            value={this.state.wifi}
                                                            onChange={this.onChangeCheckbox}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Phòng Vệ Sinh Riêng</p></div>
                                            <div className="col col-md-9">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-control contact_form_subject input_field form-check-input"
                                                            name="toilet"
                                                            value={this.state.toilet}
                                                            onChange={this.onChangeCheckbox}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p className=" form-control-label">Nơi Để Xe</p></div>
                                            <div className="col col-md-9">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-control contact_form_subject input_field form-check-input"
                                                            name="parking"
                                                            value={this.state.parking}
                                                            onChange={this.onChangeCheckbox}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p htmlFor="select" className=" form-control-label">Loại Phòng</p>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <Select
                                                    name='categoryRoomId'
                                                    value={this.state.categoryRoomId}
                                                    onChange={this.onChangeFilter}
                                                    className="form-control"
                                                    validations={[required]}
                                                >
                                                    <option value={1}>Phòng Đơn</option>
                                                    <option value={2}>Ở Ghép</option>
                                                    <option value={3}>Nhà Nguyên Căn</option>
                                                    <option value={4}>Ở Chung Với Chủ</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p htmlFor="select" className="form-control-label">Quận Huyện</p>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <Select
                                                    name='district'
                                                    value={this.state.district}
                                                    onChange={this.onChangeFilter}
                                                    className="form-control"
                                                >
                                                    {districts.map(item =>
                                                        <option value={item.idDistrict}>{item.name}</option>
                                                    )}
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p htmlFor="select" className=" form-control-label ">Đường</p>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <Select
                                                    name='streetId'
                                                    value={this.state.streetId}
                                                    onChange={this.onChangeFilter}
                                                    className="form-control"
                                                >
                                                    <option value={1}>Bình Thạnh</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><p htmlFor="file-multiple-input" className=" form-control-label">Hình Ảnh</p></div>
                                            <div className="col-12 col-md-9">
                                                <Input
                                                    type="file"
                                                    multiple
                                                    className="form-control contact_form_subject input_field"
                                                    name="file"
                                                    onChange={this.onChangeFile}
                                                    validations={[required]}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="button search_button post_button mr-5">Tạo Bài Đăng<span /><span /><span /></button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div >
        )
    }
}
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    const { district, street } = state.mainRecucer;
    return {
        isLoggedIn,
        message,
        district,
        street
    };
}
export default connect(mapStateToProps)(PostDetail);