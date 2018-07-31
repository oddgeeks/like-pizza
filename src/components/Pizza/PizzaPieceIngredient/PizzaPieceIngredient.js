import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaPieceIngredient.css';

class PizzaPieceIngredient extends Component {
  render() {
    let ingredient = null;

    switch(this.props.type) {
            case ('tomatoes'):
                ingredient = <div className = {classes.tomatoes}> 
                    <div  className = {classes.tomato9}>
                    </div>
                    <div className = {classes.tomato10}>
                    </div>
                </div>;
            break;
            case ('mushrooms'):
                ingredient = <div className = {classes.mushrooms}> 
                <div  className = {classes.cup8}>
                </div>
                <div className = {classes.stem8}>
                </div>
            </div>;
            break;
            case ('corns'):
                ingredient = <div className = {classes.corns}> 
                <div  className = {classes.corn11}>
                </div>
                </div>;
            break;
            case ('vegies'):
                ingredient = <div className = {classes.vegies}> 
                <div  className = {classes.veg14}>
                </div>
                </div>;
            break;

            default:
                ingredient = null;

    }
    return ingredient;
  }
}

PizzaPieceIngredient.PropTypes = {
    type: PropTypes.string.isRequired
}
export default PizzaPieceIngredient;