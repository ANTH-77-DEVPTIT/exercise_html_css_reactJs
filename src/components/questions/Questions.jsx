import React from "react";
import { GiDrippingStar } from "react-icons/gi"

import "./quesions.css";
const Questions = () => {
  return (
    <div className="questions">
      <div className="quesions__container">
        <div className="quesions__title">
          <p> - Góc câu hỏi - </p>
          <h2>
            Có câu hỏi nào không? Chúng tôi đã có câu trả lời. gửi email cho
            chúng tôi đến
          </h2>
        </div>
        <div className="quesions__content">
          <div className="quesions__content--item">
            <h4 className="quesions__content--title">
              <span><GiDrippingStar/></span>
              Mona Clean là gì ?
            </h4>
            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.</p>
          </div>

          <div className="quesions__content--item">
            <h4 className="quesions__content--title">
              <span><GiDrippingStar/></span>
              Mona Clean là gì ?
            </h4>
            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.</p>
          </div>

          <div className="quesions__content--item">
            <h4 className="quesions__content--title">
              <span><GiDrippingStar/></span>
              Mona Clean là gì ?
            </h4>
            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.</p>
          </div>

          <div className="quesions__content--item">
            <h4 className="quesions__content--title">
              <span><GiDrippingStar/></span>
              Mona Clean là gì ?
            </h4>
            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
