import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="">MONA CLEAN</a>
      </div>
      <div className="header__nav">
        <ul className="list__items">
          <li >
            <a href="#!" className="item">TRANG CHỦ</a>
          </li>
          <li >
            <a href="#!" className="item"> GIỚI THIỆU</a>
          </li>
          <li >
            <a href="#!" className="item">DỊCH VỤ</a>
          </li>
          <li >
            <a href="#!" className="item"> FAQ</a>
          </li>
          <li >
            <a href="#!" className="item"> LIÊN HỆ</a>
          </li>
        </ul>
      </div>
      <div className="header__phone button">0769-220-162</div>
    </div>
  );
};

export default Header;
