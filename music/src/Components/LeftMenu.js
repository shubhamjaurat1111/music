import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
                     </i>

          <h2>Music </h2>
        </div>

        <i>
         
        </i>
      </div>

      

      <Menu title={"Menu"} listObject={MenuList} />

     

     
    </div>
  );
}

export { LeftMenu };
