import React from 'react';
import '../index/responsive.css';
import '../index/main_styles.css';
import logo from '../../images/logo.png';
import icon1 from '../../images/placeholder.svg';
import icon2 from '../../images/phone-call.svg';
import icon3 from '../../images/message.svg';
import icon4 from '../../images/planet-earth.svg';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 footer_column">
							<div className="footer_col">
								<div className="footer_content footer_about">
									<div className="logo_container footer_logo">
										<div className="logo"><a href="#"><img src={logo} alt="true" />PTIT-HCM</a></div>
									</div>
									<p className="footer_about_text">Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng PhongTroPTIT tự hào là trang web đứng top google về các từ khóa: cho thuê phòng trọ, nhà trọ, thuê nhà nguyên căn, tìm người ở ghép...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 footer_column">
							<div className="footer_col">
								<div className="footer_title">Thông Tin Liên Hệ</div>
								<div className="footer_content footer_contact ">
									<ul className="contact_info_list ">
										<li className="contact_info_item d-flex flex-row">
											<div><div className="contact_info_icon"><img src={icon1} alt="true"/></div></div>
											<div className="contact_info_text"> 97 Man Thiện, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh</div>
										</li>
										<li className="contact_info_item d-flex flex-row">
											<div><div className="contact_info_icon"><img src={icon2} alt="true"/></div></div>
											<div className="contact_info_text">028 3730 6600</div>
										</li>
										<li className="contact_info_item d-flex flex-row">
											<div><div className="contact_info_icon"><img src={icon3} alt="true"/></div></div>
											<div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top"> hvbcvthcm@ptithcm.edu.vn</a></div>
										</li>
										<li className="contact_info_item d-flex flex-row">
											<div><div className="contact_info_icon"><img src={icon4} alt="true"/></div></div>
											<div className="contact_info_text"><a href="https://colorlib.com">hcm.ptit.edu.vn</a></div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
        </div>
    )
}
