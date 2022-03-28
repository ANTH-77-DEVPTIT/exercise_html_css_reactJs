import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemaps } from "react-icons/si";
import { GiEarthAmerica } from "react-icons/gi";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__title">
          <p> - Liên hệ - </p>
          <h2>Yêu cầu của khách hàng là ưu tiên hàng đầu của chúng tôi.</h2>
          <h2>Hãy liên lạc ngay với chúng tôi</h2>
        </div>

        <div className="contact__content">
          <div className="contact__content--item">
            <span className="contact__content--icon">
              <BsFillPhoneFill />
            </span>
            <h3>GỌI CHO CHÚNG TÔI</h3>
            <p>
              <a href="#!" className="contact__content--link">0769-220-162</a>
            </p>
          </div>

          <div className="contact__content--item">
            <span className="contact__content--icon">
              <HiOutlineMail />
            </span>
            <h3>EMAIL</h3>
            <p>
              <a href="#!" className="contact__content--link">demonhunterg@gmail.com</a>
            </p>
          </div>

          <div className="contact__content--item">
            <span className="contact__content--icon">
              <SiGooglemaps />
            </span>
            <h3>ĐỊA CHỈ</h3>
            <p>
              <a href="#!" className="contact__content--link">319 16C Lý Thường Kiệt</a>
            </p>
          </div>

          <div className="contact__content--item">
            <span className="contact__content--icon">
              <GiEarthAmerica />
            </span>
            <h3>WEBSITE</h3>
            <p>
              <a href="#!" className="contact__content--link">https://mona.media/</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
