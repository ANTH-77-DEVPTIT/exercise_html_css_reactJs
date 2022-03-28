import React from 'react'
import { GiFlamingArrow } from "react-icons/gi"
import "./reason.css"
const Reason = () => {
  return (
    <div className="reason">
        <div className="reason__container">
            <div className="reason__title">
                <p> - Lý do - </p>
                <h2>Tại Sao Bạn Nên Chọn Mona Clean</h2>
                <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
            </div>

            <div className="reason__content">
                <div className="reason__content--item">
                    <span><GiFlamingArrow/></span>
                    <div>
                        <h3>Chất tẩy rửa hiệu quả, tin cậy</h3>
                        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                    </div>
                </div>

                <div className="reason__content--item">
                    <span><GiFlamingArrow/></span>
                    <div>
                        <h3>Chất tẩy rửa hiệu quả, tin cậy</h3>
                        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                    </div>
                </div>

                <div className="reason__content--item">
                    <span><GiFlamingArrow/></span>
                    <div>
                        <h3>Chất tẩy rửa hiệu quả, tin cậy</h3>
                        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reason