import React from 'react';
import './offers_styles.css';
import './offers_responsive.css';
import './single_listing_styles.css';
import './single_listing_responsive.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Post from '../post/Post';

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
                                    <div className="hotel_image">
                                        <img src="images/listing_hotel.jpg" alt />
                                        <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                                            <div className="hotel_review">
                                                <div className="hotel_review_content">
                                                    <div className="hotel_review_title">very good</div>
                                                    <div className="hotel_review_subtitle">100 reviews</div>
                                                </div>
                                                <div className="hotel_review_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hotel_gallery">
                                        <div className="hotel_slider_container">
                                            <div className="owl-carousel owl-theme hotel_slider">
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_1.jpg">
                                                        <img src="images/listing_thumb_1.jpg" alt="https://unsplash.com/@jbriscoe" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_2.jpg">
                                                        <img src="images/listing_thumb_2.jpg" alt="https://unsplash.com/@grovemade" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_3.jpg">
                                                        <img src="images/listing_thumb_3.jpg" alt="https://unsplash.com/@fransaraco" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_4.jpg">
                                                        <img src="images/listing_thumb_4.jpg" alt="https://unsplash.com/@workweek" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_5.jpg">
                                                        <img src="images/listing_thumb_5.jpg" alt="https://unsplash.com/@workweek" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_6.jpg">
                                                        <img src="images/listing_thumb_6.jpg" alt="https://unsplash.com/@avidenov" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_7.jpg">
                                                        <img src="images/listing_thumb_7.jpg" alt="https://unsplash.com/@pietruszka" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_8.jpg">
                                                        <img src="images/listing_thumb_8.jpg" alt="https://unsplash.com/@rktkn" />
                                                    </a>
                                                </div>
                                                <div className="owl-item">
                                                    <a className="colorbox cboxElement" href="images/listing_9.jpg">
                                                        <img src="images/listing_thumb_9.jpg" alt="https://unsplash.com/@mindaugas" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hotel_slider_nav hotel_slider_prev">
                                                <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                                    <defs>
                                                        <linearGradient id="hotel_grad_prev">
                                                            <stop offset="0%" stopColor="#fa9e1b" />
                                                            <stop offset="100%" stopColor="#8d4fff" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
												M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
												C22.545,2,26,5.541,26,9.909V23.091z" />
                                                    <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
												11.042,18.219 " />
                                                </svg>
                                            </div>
                                            <div className="hotel_slider_nav hotel_slider_next">
                                                <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                                    <defs>
                                                        <linearGradient id="hotel_grad_next">
                                                            <stop offset="0%" stopColor="#fa9e1b" />
                                                            <stop offset="100%" stopColor="#8d4fff" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
											M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
											C22.545,2,26,5.541,26,9.909V23.091z" />
                                                    <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
											17.046,15.554 " />
                                                </svg>
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
