import React from "react";
// import { GiFlamingArrow } from "react-icons/gi"
import { BsArrowRightSquare } from "react-icons/bs";

import "./maxim.css";

const Maxim = () => {
  return (
    <div className="maxim">
      <div className="maxim__container">
        <div className="maxim__title">
          <h2>Châm ngôn của chúng tui trong công việc</h2>
          <p>
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
            trình bày và dàn trang phục vụ cho in ấn
          </p>
        </div>

        <div className="maxim__content">
          <div className="maxim__content--item">
            <div className="maxim__content--details">
              <h3>
                Chúng tôi là dịch vụ dọn dẹp nhà cửa tốt nhất của tốt nhất
              </h3>
              <p>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                bản với nhau để tạo thành một bản mẫu văn bản.
              </p>
              <button className="button maxim__button">
                <span>Xem thêm</span>
                <BsArrowRightSquare />
              </button>
            </div>
            <div className="maxim__content--img">
                <img src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/benifits2.jpg" alt="" />
            </div>
          </div>

          <div className="maxim__content--item">
            <div className="maxim__content--details">
              <h3>
                Chúng tôi là dịch vụ dọn dẹp nhà cửa tốt nhất của tốt nhất
              </h3>
              <p>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn
                từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn
                bản với nhau để tạo thành một bản mẫu văn bản.
              </p>
              <button className="button maxim__button">
                <span>Xem thêm</span>
                <BsArrowRightSquare />
              </button>
            </div>
            <div className="maxim__content--img">
                <img src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/benifits1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maxim;
