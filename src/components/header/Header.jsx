import React from "react";
import "./header.css";
const Header = () => {
  // const onScroll = () => {
  //   //truy xuất ra thằng header
  //   var h = document.getElementById("header")
  //   console.log(h);

  //   h.addEventListener("scroll", () => {
  //       //xử lý thằng header khi scroll
  //       var y = window.pageYOffset;
  //       console.log(y);
  //   })
  // }
  // onScroll()
  return (
    <div id="header" className="header scroll">
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
