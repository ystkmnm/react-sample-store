import React from 'react';
import Listitem from './Listitem.js';

const List = (props) => {

  const {
    listItems,
    addToCart
  } = props;

  var lists = listItems.map(function(item,idx) {
    return <Listitem key= { idx } title = {item.title} content= {item.content} img={item.img} price={item.price} addToCart={ ()=> addToCart(item) } />
  });

  return (
    <div>
      <div className="m-counter-item"><span>{listItems.length}</span> items</div>
      <div className="l-lists">
        {lists}
      </div>
    </div>
  );
};

export default List;
