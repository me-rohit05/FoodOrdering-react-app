import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <haeder className={classes.header}>
        <h1>Today's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </haeder>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foods-images" />
      </div>
    </Fragment>
  );
}

export default Header;
