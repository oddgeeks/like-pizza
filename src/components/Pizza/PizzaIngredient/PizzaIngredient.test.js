import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {PizzaIngredient} from '../PizzaIngredient/PizzaIngredient';

configure({adapter: new Adapter()});

describe('<PizzaIngredient />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PizzaIngredient />)
    });

    it('Should render tomatoe with id tomato8 when reveiving tomatoes type', () => {
        wrapper.setProps({type: 'tomatoes'});
        expect(wrapper.find('#tomato8').exists()).toBe(true);
        
    });
    it('Should render mushroom with id stem7 when reveiving mushrooms type', () => {
        wrapper.setProps({type: 'mushrooms'});
        expect(wrapper.find('#stem7').exists()).toBe(true);
        
    });
    it('Should render corn with id corn11 when reveiving corns type', () => {
        wrapper.setProps({type: 'corns'});
        expect(wrapper.find('#corn11').exists()).toBe(true);
        
    });
    it('Should render vegie with id veg13 when reveiving vegies type', () => {
        wrapper.setProps({type: 'vegies'});
        expect(wrapper.find('#veg13').exists()).toBe(true);
        
    });
}) 