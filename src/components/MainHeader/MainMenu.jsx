import React, { useState } from "react";
import classes from "./MainMenu.module.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MainMenuDrop from "./MainMenuDrop";

const MainMenu = (props) => {
  const [menuOpenClicked, setmenuOpenClicked] = useState(false);

  const menuOpenClickHandler = () => {
    setmenuOpenClicked((prevState) => !prevState);
  };

  return (
    <div className={classes.main_menu_div}>
      <div className={classes.main_mc}>
        <MainMenuDrop />
      </div>
      <div className={classes.main_menu_btn_oc} onClick={menuOpenClickHandler}>
        {menuOpenClicked ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {menuOpenClicked && (
        <div className={classes.main_mco}>
          <MainMenuDrop></MainMenuDrop>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
