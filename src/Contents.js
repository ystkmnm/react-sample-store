import React from 'react';
import List from './List.js';
import Board from './Board.js';

const Contents = (props) => {
  const {
    listItems,
    cartItems,
    addToCart,
    removeFromCart
  } = props;

  return (
    <div className="l-content">
      <List
      	listItems= { listItems }
      	addToCart = { addToCart }
      />
      <Board
      	cartItems = { cartItems }
      />
    </div>
  );
};

export default Contents;