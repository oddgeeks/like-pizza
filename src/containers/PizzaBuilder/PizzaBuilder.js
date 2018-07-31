import React, {Component} from 'react';
import Aux from '../../hoc/AuxObj';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {getIngredients} from '../../mockup';

const INGREDIENT_PRICES = {
    tomatoes: 0.5,
    mushrooms: 0.5,
    corns: 0.5,
    vegies: 0.5
};

class PizzaBuilder extends Component {
    state = {
        ingredients:null,
        totalPrice: 0,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        this.setState({ingredients: getIngredients()});
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey];
                    }).reduce((sum, el)=> {
                        return sum+el;
                    }, 0);

        this.setState({purchaseable: sum > 0});

    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients: updatedIngredients}); 
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({totalPrice:newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    }
purchaseHandler = () => {
    this.setState({purchasing: true});
}
purchaseCancelHandler = () => {
    this.setState({purchasing: false});
}
purchaseContinueHandler = () => {

    this.setState({loading: true});

}
    render () {
        
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let pizza = this.state.error? <p> Ingredients cant be loaded </p> : <Spinner />

        if(this.state.ingredients) {
            pizza =  (
                <Aux>
                    <Pizza ingredients = {this.state.ingredients}/>
                    <BuildControls ingredientAdded = {this.addIngredientHandler} 
                        ingredientRemoved = {this.removeIngredientHandler}
                        disabled= {disabledInfo}
                        purchaseable={this.state.purchaseable}
                        ordered = {this.purchaseHandler}
                        price = {this.state.totalPrice}/>
                </Aux>
                );
                orderSummary = <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinued = {this.purchaseContinueHandler}
                    price = {this.state.totalPrice}
                />;
        }
        
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show ={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>       
                {pizza}     
            </Aux>
        );
    }
}

export default withErrorHandler(PizzaBuilder);