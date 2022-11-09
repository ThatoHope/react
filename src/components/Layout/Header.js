import { Fragment } from "react";

import HeaderCartButton  from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = (props) => {
  return (
    <Fragment className={classes.header}>
      <header>
        <h1>ReactMeals</h1>
   < HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img  src={mealsImage} alt="A table full of delicius food!"/>
      </div>
    </Fragment>
  );
};

export default Header;