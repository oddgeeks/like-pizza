import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {PizzaBuilder} from './PizzaBuilder';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<PizzaBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PizzaBuilder />)
    });

    it('Should render <BuilControls /> when receiving ingredients from mockup', () => {
        wrapper.setProps({ingredients: {tomatoes: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
})