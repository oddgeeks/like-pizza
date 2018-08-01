import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredient.css';

export class PizzaIngredient extends Component {
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
                    <div className = {classes.tomato8} id="tomato8">
                    </div>
                </div>;
            break;
            case ('mushrooms'):
                ingredient = <div className = {classes.mushrooms}> 
                 <div className = {classes.cup1}>
                </div>
                <div className = {classes.stem1}>
                </div>
                <div className = {classes.cup2}>
                </div>
                <div className = {classes.stem2}>
                </div>
                <div className = {classes.cup3}>
                </div>
                <div className = {classes.stem3}>
                </div>
                <div className = {classes.cup4}>
                </div>
                <div className = {classes.stem4}>
                </div>
                <div className = {classes.cup5}>
                </div>
                <div className = {classes.stem5}>
                </div>
                <div className = {classes.cup6}>
                </div>
                <div className = {classes.stem6}>
                </div>
                <div className = {classes.cup7}>
                </div>
                <div className = {classes.stem7} id="stem7">
                </div>
                </div>;
            break;
            case ('corns'):
                ingredient = <div className = {classes.corns}> 
                	<div className = {classes.corn1}>
                    </div>
                    <div className = {classes.corn2}>
                    </div>
                    <div className = {classes.corn3}>
                    </div>
                    <div className = {classes.corn4}>
                    </div>
                    <div className = {classes.corn5}>
                    </div>
                    <div className = {classes.corn6}>
                    </div>
                    <div className = {classes.corn7}>
                    </div>
                    <div className = {classes.corn8}>
                    </div>
                    <div className = {classes.corn9}>
                    </div>
                    <div className = {classes.corn10}>
                    </div>
                    <div className = {classes.corn11} id="corn11">
                    </div>
                </div>;
            break;
            case ('vegies'):
                ingredient = <div className = {classes.vegies}> 
                	<div className = {classes.veg1}>
                    </div>
                    <div className = {classes.veg2}>
                    </div>
                    <div className = {classes.veg3}>
                    </div>
                    <div className = {classes.veg4}>
                    </div>
                    <div className = {classes.veg5}>
                    </div>
                    <div className = {classes.veg6}>
                    </div>
                    <div className = {classes.veg7}>
                    </div>
                    <div className = {classes.veg8}>
                    </div>
                    <div className = {classes.veg9}>
                    </div>
                    <div className = {classes.veg10}>
                    </div>
                    <div className = {classes.veg11}>
                    </div>
                    <div className = {classes.veg12}>
                    </div>
                    <div className = {classes.veg13} id="veg13">
                    </div>
                </div>;
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