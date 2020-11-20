import React from 'react';
import './offers_styles.css';
import './offers_responsive.css';
import './single_listing_styles.css';
import './single_listing_responsive.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Post from '../post/Post';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../images/listing_thumb_1.jpg';
import img2 from '../../images/listing_thumb_2.jpg';
import img3 from '../../images/listing_thumb_3.jpg';
import img4 from '../../images/listing_thumb_4.jpg';
import img5 from '../../images/listing_thumb_5.jpg';
import img6 from '../../images/listing_thumb_6.jpg';
import img7 from '../../images/listing_thumb_7.jpg';
export default function SingleListingPage() {
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single_listing">
                                <div className="hotel_info">
                                    <div className="hotel_title_container d-flex flex-lg-row flex-column">
                                        <div className="hotel_title_content">
                                            <h1 className="hotel_title">Grand Hotel Eurostar</h1>
                                            <div className="rating_r rating_r_4 hotel_rating">
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <div className="hotel_location">345 677 Gran Via Street, no 34, Madrid, Spain</div>
                                        </div>
                                        <div className="hotel_title_button ml-lg-auto text-lg-right">
                                            <button className="button like_button single_button"><i className="fa fa-heart-o mr-1" aria-hidden="true" />Lưu Tin  <span /><span /><span /></button>
                                            <div className="hotel_map_link_container">
                                                <div className="hotel_map_link">See Location on Map</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hotel_gallery">
                                        <div className="hotel_slider_container">
                                        <div class='container-fluid' >   
                                            <OwlCarousel items={4}
                                                className="owl-theme"
                                                loop
                                                nav
                                                margin={8} >
                                                <div ><img className="img-carousel" src={img1} /></div>
                                                <div><img className="img-carousel" src={img2} /></div>
                                                <div><img className="img-carousel" src={img3} /></div>
                                                <div><img className="img-carousel" src={img4} /></div>
                                                <div><img className="img-carousel" src={img5} /></div>
                                                <div><img className="img-carousel" src={img6} /></div>
                                                <div><img className="img-carousel" src={img7} /></div>
                                                <div><img className="img-carousel" src={img5} /></div>
                                                <div><img className="img-carousel" src={img6} /></div>
                                                <div><img className="img-carousel" src={img7} /></div>
                                            </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hotel_info_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis
                                        tortor. Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis
                                        consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula
                                        pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus
                                        euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum
                                        sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus
                                        placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend
                                        dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed
                  eleifend justo tristique eu</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="offers_grid">
                                        <h2>Bài Đăng Tương Tự</h2>
                                        <Post></Post>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}