import React from "react";
import {BrowserRouter as Router,Switch,Route ,Redirect,Routes} from 'react-router-dom';
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
// import { Switch } from "@material-ui/core";

function App({ current }) {
  return (
    <div>
    <Router>
    <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? 
            <Redirect to="/" />
           : 
            <Route exact path="/product/:id" component={SingleItem}/>
          }
          {/* <Route exact path="/product/:id" component={SingleItem}/> */}
        </Switch> 
        </div>
    </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    current : state.currentItem
  }
}

export default connect(mapStateToProps)(App)