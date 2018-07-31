import React from 'react';
import classes from './DoughTypes.css';
import PizzaBuilder from '../../../containers/PizzaBuilder/PizzaBuilder';
import {fetchDoughTypes} from '../../../mockup';

const doughtypes = () => {
    let types = fetchDoughTypes();
    debugger;
   return (
    <div>
      <ul>
        <li>
          
        </li>
      </ul>

      <hr />
    </div>
    );
};

export default doughtypes;