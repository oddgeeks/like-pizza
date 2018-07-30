import React from 'react';
import pizzaLogo from '../../assets/images/pizzalogo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}> 
        <img src={pizzaLogo} alt = "PizzaOnline"/>
    </div>
);
 
export default logo;