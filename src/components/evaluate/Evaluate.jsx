import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";

import "./evaluate.css";
const Evaluate = () => {
  return (
    <div className="evaluate">
      <div className="evaluate__content">
        <div className="evaluate__title">
          <p>Hơn 2000 Công Ty Đã Sử Dụng Sản Phẩm Của More Clean.</p>
        </div>
        <button className="evaluate__seeMore button">
          <span>Xem thêm</span>
          <BsArrowRightSquare/>
        </button>
      </div>
    </div>
  );
};

export default Evaluate;
