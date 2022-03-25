import React from "react";
import { GoCalendar } from "react-icons/go";
import { GiConfirmed } from "react-icons/gi";
import { ImHome3 } from "react-icons/im";

import "./section.css";
const Section = () => {
  return (
    <>
      <div className="contact">
        <div className="banner__left">
          <form>
            <h2 className="banner__title">DỊCH VỤ DỌN DẸP NHÀ SỐ 1 TRÁI ĐẤT</h2>
            <input type="text" placeholder="Họ và Tên" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Số điên thoại" />
            <input type="text" placeholder="Địa chỉ" />
            <button className="button button__form">GỬI</button>
          </form>
        </div>

        <div className="banner__right">
          <h2 className="contact__title">
            Liên hệ ngay cho chúng tôi để dọn dẹp căn nhà của bạn
          </h2>
          <div className="contact__content">
            <div className="contact__calendar">
              <div className="calendar__icon">
                <GoCalendar />
              </div>
              <div className="calendar__content">
                <h4>1. LIÊN HỆ ĐỂ ĐẶT LỊCH HẸN</h4>
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </p>
              </div>
            </div>
            <div className="contact__calendar">
              <div className="calendar__icon">
                <GiConfirmed />
              </div>
              <div className="calendar__content">
                <h4>2. XÁC NHẬN</h4>
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </p>
              </div>
            </div>
            <div className="contact__calendar">
              <div className="calendar__icon">
                <ImHome3 />
              </div>
              <div className="calendar__content">
                <h4>3. CÒN LẠI ĐỂ CHÚNG TÔI LO</h4>
                <p>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Section;
