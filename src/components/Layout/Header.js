import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
   return (
      <Fragment>
         <header className={classes.header}>
            <h>React Meals </h>
            <HeaderCartButton onClick={props.onShowCart} />
         </header>
         <div className={classes["main-image"]}>
            <img src={mealsImage} alt="A table fuöö of food" />
         </div>
      </Fragment>
   );
};

export default Header;
