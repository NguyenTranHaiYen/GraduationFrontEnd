import React, { Component } from 'react';
import './responsive.css';
import './main_styles.css';
import screen from '../../images/screen-shot-2017-08-17-at-6-47-22-pm-1502970490293.png';
import screen1 from '../../images/gai-tay-xinh-7-696x696.jpg';
import pic1 from '../../images/backpack.png';
import pic2 from '../../images/island_t.png';
import screen3 from '../../images/screen-shot-2018-10-01-at-95956-pm-15384061286081927130003.png';
import pic3 from '../../images/kayak.png';
import Footer from '../footer/Footer';
import Service from "../../services/Service";
import Header from '../header/Header';

export default class index extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<div className="home1">
					<div className="home_slider_container">
						<div className="owl-theme home_slider">
							<div className="owl-item home_slider_item">
								<div className="home_slider_background" />
								<div className="home_slider_content text-center">
									<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
										<h1>PTIT</h1>
										<h1>Nhà Trọ</h1>
										<div className="button home_slider_button"><div className="button_bcg" /><a href="#">Đăng Nhập Ngay<span /><span /><span /></a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="intro">
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="intro_title text-center">Bài Đăng Mới Nhất</h2>
							</div>
						</div>
						<div className="row intro_items">
							<div className="col-lg-4 intro_col">
								<div className="intro_item">
									<div className="intro_item_overlay" />
									<div className="intro_item_background" style={{ backgroundImage: 'url(images/intro_1.jpg)' }} />
									<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
										<div className="intro_date">May 25th - June 01st</div>
										<div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
										<div className="intro_center text-center">
											<h1>Mauritius</h1>
											<div className="intro_price">From $1450</div>
											<div className="rating rating_4">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 intro_col">
								<div className="intro_item">
									<div className="intro_item_overlay" />
									<div className="intro_item_background" style={{ backgroundImage: 'url(images/intro_2.jpg)' }} />
									<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
										<div className="intro_date">May 25th - June 01st</div>
										<div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
										<div className="intro_center text-center">
											<h1>Greece</h1>
											<div className="intro_price">From $1450</div>
											<div className="rating rating_4">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 intro_col">
								<div className="intro_item">
									<div className="intro_item_overlay" />
									<div className="intro_item_background" style={{ backgroundImage: 'url(images/intro_3.jpg)' }} />
									<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
										<div className="intro_date">May 25th - June 01st</div>
										<div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
										<div className="intro_center text-center">
											<h1>Scotland</h1>
											<div className="intro_price">From $1450</div>
											<div className="rating rating_4">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ctaa">
					<div className="cta_background" />
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="">
									<div className="">
										<div className=" text-center">
											<div className="cta_title">Bạn Muốn Cho Thuê?</div>
											<div className="rating_r rating_r_4">
												<i></i>
												<i></i>
												<i></i>
												<i></i>
												<i></i>
											</div>
											<p className="cta_text">Hãy Đến Với Chúng Tôi. Đăng Kí Thành Viên Và Đăng Nhập Để Đăng Bài. Các Bước Đăng Kí Rất Đơn Giản, Nhanh Chóng. <i className="fas fa-grin-hearts    " /></p>
											<div className="button home_slider_button"><div className="button_bcg" /><a href="#">Đăng Nhập Ngay<span /><span /><span /></a></div>
										</div>
									</div>
									<div className="cta_slider_nav cta_slider_prev">
										<svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
											<defs>
												<linearGradient id="cta_grad_prev">
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
									<div className="cta_slider_nav cta_slider_next">
										<svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
											<defs>
												<linearGradient id="cta_grad_next">
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
						</div>
					</div>
				</div>
				<div className="testimonials">
					<div className="test_border" />
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<h2 className="section_title">Khách Hàng Nói Gì Về Chúng Tôi</h2>
							</div>
						</div>
						<div className="row">
							<div className="row intro_items">
								<div className="col-lg-4 intro_col">
									<div className="intro_item">
										<div className="test_image"><img className="comment" src={screen} /></div>
										<div className="test_icon"><img src={pic1} alt="true"/></div>
										<div className="test_content_container">
											<div className="test_content">
												<div className="test_item_info">
													<div className="test_name">Hữu Tín</div>
													<div className="test_date">18/01/2020</div>
												</div>
												<div className="test_quote_title">"Tìm Phòng Trọ Chưa Bao Giờ Dễ Dàng Hơn"</div>
												<p className="test_quote_text">Dịch vụ tuyệt vời, giá cả phù hợp với sinh viên.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 intro_col">
									<div className="intro_item">
										<div className="test_image"><img className="comment" src={screen1} alt="https://unsplash.com/@tschax" /></div>
										<div className="test_icon"><img src={pic2} alt="true"/></div>
										<div className="test_content_container">
											<div className="test_content">
												<div className="test_item_info">
													<div className="test_name">Thảo Vy</div>
													<div className="test_date">25/06/2020</div>
												</div>
												<div className="test_quote_title">"Website Uy Tín"</div>
												<p className="test_quote_text">Tìm kiếm nhanh chóng, phòng đảm bảo chất lượng như hình.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 intro_col">
									<div className="intro_item">
										<div className="test_image"><img className="comment" src={screen3} alt="https://unsplash.com/@seefromthesky" /></div>
										<div className="test_icon"><img src={pic3} alt="true"/></div>
										<div className="test_content_container">
											<div className="test_content">
												<div className="test_item_info">
													<div className="test_name">Phương Trang</div>
													<div className="test_date">25/05/2020</div>
												</div>
												<div className="test_quote_title">"Trên Cả Tuyệt Vời"</div>
												<p className="test_quote_text">Website đã giúp tôi rất nhiều trong việc tìm kiếm phòng trọ.</p>
											</div>
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
}

