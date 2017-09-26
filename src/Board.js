import React from 'react';
const Board = (props) => {

  const {
    cartItems
  } = props;

  let lists;
  if(cartItems.length) {
    var items = []
    for(var i in cartItems) {
      var img = <img src = { cartItems[i].img } />
      items.push(<li> { img } </li>)
    }
    lists = <ul>{ items }</ul>
  } else {
    lists = <span>カートに商品がありません</span>
  }


  return (
    <div className="l-board">
      <div className="l-board-inner">
        <p className="ttl">選択したアイテム</p>
        {lists}
      </div>
    </div>
  );
};

export default Board;
