import React from 'react';
import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';
import PizzaPieceIngredient from './PizzaPieceIngredient/PizzaPieceIngredient';

const pizza = (props) => {
    //Ingredients big piece of pizza
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredient key={igKey+i} type = {igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);
        
        let transformedPieceIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaPieceIngredient key={igKey+i} type = {igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p> Please start adding ingredients! </p>
        }
        return (
            <div>
                <div className ={classes.plate}>
                <div className={classes.pizzabase1}>
                </div>
                <div className={classes.pizzabase2}>
                </div>
                    {transformedIngredients}
                </div>
                <div className={classes.slicebase1}>
                </div>
                <div className={classes.slicebase2}>
                </div>
                    {transformedPieceIngredients}
                <div className = {classes.handle}> </div>
                <div className = {classes.handlehole}> </div>
             </div>
        );
};

export default pizza;