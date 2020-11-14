import React from 'react';
import '../single/offers_styles.css';
import '../single/offers_responsive.css';
import post from '../../images/post.png';
import compass from '../../images/compass.png';
import bicycle from '../../images/bicycle.png';
import sailboat from '../../images/sailboat.png';
import offer_8 from '../../images/offer_8.jpg';
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="col-lg-12">
            <div className="offers_grid">
                <div className="offers_item rating_3">
                    <div className="row">
                        <div className="col-lg-1 temp_col" />
                        <div className="col-lg-3 col-1680-4">
                            <div className="offers_image_container">
                                <div className="offers_image_background" style={{ backgroundImage: "url(" + offer_8 + ")" }} />
                                <div className="offer_name">
                                    <Link to={"/single"} className="nav-link mt-0 pt-0">
                                        Xem Chi Tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="offers_content">
                                <div className="offers_price">$90<span>per night</span></div>
                                <div class="rating_r rating_r_3 offers_rating" data-rating="3">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
  Lorem ipsum dolor sit amet.</p>
                                <div className="offers_icons">
                                    <ul className="offers_icons_list">
                                        <li className="offers_icons_item"><img src={post} alt />
                                        </li>
                                        <li className="offers_icons_item"><img src={compass} alt />
                                        </li>
                                        <li className="offers_icons_item"><img src={bicycle} alt />
                                        </li>
                                        <li className="offers_icons_item"><img src={sailboat} alt />
                                        </li>
                                    </ul>
                                </div>
                                <button className="button like_button"><i className="fa fa-heart-o mr-1" aria-hidden="true" />Lưu Tin  <span /><span /><span /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
