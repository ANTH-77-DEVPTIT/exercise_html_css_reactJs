import React from "react";
import "./gallery.css";
const Gallery = () => {

    const overflow = () => {
        //khi người dùng click một trong năm cái thì phải hiện lên một lớp bao phủ và 
    }
  return (
    <div className="section__gallery">
      <div className="gallery__content">
        <div className="gallery__item" onClick={overflow}>
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/1.png"
              alt=""
            />
          </a>
        </div>
        <div className="gallery__item" onClick={overflow}>
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/2.png"
              alt=""
            />
          </a>
        </div>
        <div className="gallery__item" onClick={overflow}>
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/3.png"
              alt=""
            />
          </a>
        </div>
        <div className="gallery__item" onClick={overflow}>
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/4.png"
              alt=""
            />
          </a>
        </div>
        <div className="gallery__item" onClick={overflow}>
          <a href="#!">
            <img
              src="http://mauweb.monamedia.net/cleanaa/wp-content/uploads/2019/10/5.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
