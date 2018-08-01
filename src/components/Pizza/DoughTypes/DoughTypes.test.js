import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DoughTypes from '../DoughTypes/DoughTypes';
import Link  from "react-router-dom";

configure({adapter: new Adapter()});

describe('<DoughTypes />', ()=> {
    it('should render one or more dough types', () => {
        const wrapper = shallow(<DoughTypes />);

        expect(wrapper.find('li').exists()).toBe(true);
        // expect(wrapper.find('li')).toHaveLength(2);
    })
})