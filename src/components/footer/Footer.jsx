import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__content--item">
            <a href="#!">
              <img
                className="footer__content--logo"
                src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/Asset-1-1.png"
                alt=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <div className="content__item--icon">
              <a href="#!" className="content__icon--link">
                <GrFacebookOption />
              </a>
              <a href="#!" className="content__icon--link">
                <IoLogoTwitter />
              </a>
              <a href="#!" className="content__icon--link">
                <SiGmail />
              </a>
              <a href="#!" className="content__icon--link">
                <FaPinterestP />
              </a>
              <a href="#!" className="content__icon--link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer__content--item">
            <h3>LIÊN QUAN</h3>
            <ul>
              <li>
                <a href="#1">Tạo sao là chúng tôi</a>
              </li>
              <li>
                <a href="#1">Đội của chúng tôi</a>
              </li>
              <li>
                <a href="#1">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3>LIÊN KẾT</h3>
            <ul>
              <li>
                <a href="#!">Đăng ký</a>
              </li>
              <li>
                <a href="#!">Diễn đàng</a>
              </li>
              <li>
                <a href="#!">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#!">Chi nhánh</a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3>PHƯƠNG THỨC THANH TOÁN</h3>
            <div>
              <a href="#!">
                <img
                  className="img__payment"
                  src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/31.png"
                  alt=""
                />
              </a>

              <a href="#!">
                <img
                  className="img__payment"
                  src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/41.png"
                  alt=""
                />
              </a>

              <a href="#!">
                <img
                  className="img__payment"
                  src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/11.png"
                  alt=""
                />
              </a>

              <a href="#!">
                <img
                  className="img__payment"
                  src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/21.png"
                  alt=""
                />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>

        <div className="footer__license">
          <p>
            © Bản quyền thuộc về công ty khách hàng. Thiết kế website MonaMedia {  "  "}
            <a href="#!">Mona Media</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
