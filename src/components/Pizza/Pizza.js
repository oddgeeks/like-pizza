import React from 'react';
import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredient key={igKey+i} type = {igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);     
        if(transformedIngredients.length === 0) {
            transformedIngredients = <p> Please start adding ingredients! </p>
        }
        return (
            <div className ={classes.Burger}>
                <PizzaIngredient type="bread-top"/>
                    {transformedIngredients}
                <PizzaIngredient type="bread-bottom"/>
             </div>
        );
};

export default pizza;