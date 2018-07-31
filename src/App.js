import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import DoughTypes from './components/Pizza/DoughTypes/DoughTypes';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Layout> 
            <Switch>
              <Route path="/builder/:id" component={PizzaBuilder} />
              <Route path="/" component={DoughTypes} />
            </Switch>
            </Layout>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
