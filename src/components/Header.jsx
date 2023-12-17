import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpend, setMenuOpend] = useState(false);
  const getMenuStyles = (menuOpend) => {
    if (document.documentElement.clientWidth < 768) {
      return {
        right: !menuOpend && "-100%",
      };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="./logo.png" alt="Main logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpend(false)}>
          <div className="h-menu" style={getMenuStyles(menuOpend)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpend((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
