import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Mushrooms', type: 'mushrooms'},
    {label: 'Corns', type: 'corns'},
    {label: 'Vegies', type: 'vegies'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}> 
        <p> Current Price: <strong> {props.price.toFixed(2)} </strong> </p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                // type ={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed= {() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} 
                disabled={!props.purchaseable}
                onClick={props.ordered}>  ORDER NOW </button>
    </div>
);

export default buildControls;