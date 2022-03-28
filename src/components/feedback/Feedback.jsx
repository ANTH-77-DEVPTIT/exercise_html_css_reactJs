import React from "react";
import "./feedback.css";
import { MdDynamicFeed } from "react-icons/md";

const Feedback = () => {
  return (
    <div className="feedback">
    <div className="feedback__container">
      <div className="feedback__title">
        <p>- Giới thiệu -</p>
        <h2>Phản hồi của khách hàng về dịch vụ của công ty chúng tôi</h2>
      </div>
      <div className="feedback__content">
        <a href="#!" className="feedback__content--item">
            <div className="feedback__icon">
              <MdDynamicFeed />
            </div>
            <p>
              “Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn”
            </p>
            <p>
              <span>- An đẹp trai - </span>
              <span>WordPress Web Design</span>
            </p>
        </a>
        <a href="#!" className="feedback__content--item">
            <div className="feedback__icon">
              <MdDynamicFeed />
            </div>
            <p>
              “Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn”
            </p>
            <p>
              <span>- An đẹp trai - </span>
              <span>WordPress Web Design</span>
            </p>
        </a>
        <a href="#!" className="feedback__content--item">
            <div className="feedback__icon">
              <MdDynamicFeed />
            </div>
            <p>
              “Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn”
            </p>
            <p>
              <span>- An đẹp trai - </span>
              <span>WordPress Web Design</span>
            </p>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Feedback;
