import React from "react";
import banner from "../img/banner.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={banner} alt="" className="bannerImg" />

      <div className="content">
        
         <h2>Your Favourite Tunes </h2>
          <h3>listen and relax your mind</h3>
      </div>

      
    </div>
  );
}

export { Banner };
