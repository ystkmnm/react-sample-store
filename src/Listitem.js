import React from 'react';

const Listitem = (props) => {

  const {
    title,
    img,
    price,
    content,
    addToCart
  } = props;

  var str_price = (function(num) {
  	var txt = String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  	return "¥" + txt;
  })(price);
  
  return (
    <div className="m-list-item">
      <h2 className="title">{ title }</h2>
      <p className="photo"><img src={ img } alt="" /></p>
      <p className="price">{ str_price }</p>
      <p className="desc">{ content }</p>
      <button onClick={ addToCart }>カートに追加</button>
    </div>
  );
};

export default Listitem;
