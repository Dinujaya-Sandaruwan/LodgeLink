import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [menuOpend, setMenuOpend] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

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
        <Link to="/">
          <img src="./logo.png" alt="Main logo" width={100} />
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenuOpend(false)}>
          <div className="h-menu" style={getMenuStyles(menuOpend)}>
            <NavLink to="/properties">properties</NavLink>

            <a href="mailto:info.dinujaya@gmail.com">Contact</a>
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
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
