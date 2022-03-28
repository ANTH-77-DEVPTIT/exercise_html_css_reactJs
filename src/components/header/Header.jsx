import React from "react";
import "./header.css";
const Header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("header");
    window.addEventListener("scroll", function () {
      var x = window.scrollY;
      if (x > 150) {
        h.classList.add("scroll");
      } else {
        h.classList.remove("scroll");
      }
    });
  });
  
  return (
    <div id="header" className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/Asset-1-1.png"
              alt=""
            />
          </a>
        </div>
        <div className="header__nav">
          <ul className="list__items">
            <li>
              <a href="#!" className="item">
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a href="#!" className="item">
                {" "}
                GIỚI THIỆU
              </a>
            </li>
            <li>
              <a href="#!" className="item">
                DỊCH VỤ
              </a>
            </li>
            <li>
              <a href="#!" className="item">
                {" "}
                FAQ
              </a>
            </li>
            <li>
              <a href="#!" className="item">
                {" "}
                LIÊN HỆ
              </a>
            </li>
          </ul>
          <div className="header__phone button">0769-220-162</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
