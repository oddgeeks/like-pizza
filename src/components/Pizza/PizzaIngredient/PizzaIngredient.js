import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredient.css';

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    switch(this.props.type) {
            case ('tomatoes'):
                ingredient = <div className = {classes.tomatoes}> 
                    <div className = {classes.tomato1}>
                    </div>
                    <div  className = {classes.tomato2}>
                    </div>
                    <div  className = {classes.tomato3}>
                    </div>
                    <div  className = {classes.tomato4}>
                    </div>
                    <div  className = {classes.tomato5}>
                    </div>
                    <div  className = {classes.tomato6}>
                    </div>
                    <div  className = {classes.tomato7}>
                    </div>
                    <div className = {classes.tomato8}>
                    </div>
                </div>;
            break;
            case ('mushrooms'):
                ingredient = <div className = {classes.Cheese}> </div>;
            break;
            case ('corns'):
                ingredient = <div className = {classes.Bacon}> </div>;
            break;
            case ('vegies'):
                ingredient = <div className = {classes.Salad}> </div>;
            break;

            default:
                ingredient = null;

    }
    return ingredient;
  }
}

PizzaIngredient.PropTypes = {
    type: PropTypes.string.isRequired
}
export default PizzaIngredient;