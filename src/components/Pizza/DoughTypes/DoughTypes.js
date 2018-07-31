import React from 'react';
import classes from './DoughTypes.css';
import {fetchDoughTypes} from '../../../mockup';
import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../../../hoc/AuxObj';
import { Link } from "react-router-dom";

const doughtypes = () => {
    let types = fetchDoughTypes();
    let list = types.map(type => {
      return (
      <li key={type.id}> 
          <Link to={"/builder/" + type.id}>{type.name}</Link>
      </li>
     
    );
  });
    return (
      <Aux>
          <Modal show ={true} modalClosed = {false}>
          <div className={classes.listtype3}>
          <p>Select your dough type. </p>
              <ol>
                {list}
              </ol>
            </div>
          </Modal>          
      </Aux>
  );
};

export default doughtypes;