import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";

import "./participation.css";

const Participation = () => {
  return (
    <div className="participation">
      <div className="participation__container">
        <h2>Tham gia Mona Clean để trở thành một chuyên gia làm sạch</h2>
        <p>
          Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
          trình bày và dàn trang phục vụ cho in ấn
        </p>
        <button className="button participation__button">
          <span>Apply ngay cho chúng tôi</span>
          <BsArrowRightSquare />
        </button>
        <p>
          Hoặc Email cho chúng tôi: <a href="#!" className="participation__link">demonhunterg@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Participation;
