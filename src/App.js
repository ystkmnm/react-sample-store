import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Contents from './Contents.js';
import { fetchItemModel } from './util';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      cartItems: []
    };
    this._addToCart = this._addToCart.bind(this);
    this._removeFromCart = this._removeFromCart.bind(this);
  }

  _addToCart(item) {
    let newCartItems = this.state.cartItems.slice();
    newCartItems.push(item);
    this.setState({ cartItems: newCartItems });
  }

  _removeFromCart() {
    console.log("_removeFromCart");
  }

  render() {
  	const { listItems } = this.props;
    const { cartItems } = this.state;
    return (
      <div className="App">
        <Header />
        <Contents
          listItems = { listItems }
          cartItems= { cartItems }
          addToCart = { this._addToCart }
          removeFromCart = { this._removeFromCart }
        />
      </div>
    );
  }
}

export default App;
