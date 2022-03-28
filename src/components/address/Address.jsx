import React from "react";
import "./address.css";

const Address = () => {
  return (
    <div className="address">
      <div className="addressMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7613.88004356382!2d106.64063774775448!3d10.850145337935247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1648453694103!5m2!1svi!2s"
            height={285}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      </div>
    </div>
  );
};

export default Address;
