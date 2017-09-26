const DATA = [
  {
  	title: "すごいパーカー",
    img: "img/parker_01.jpg",
    price: 38000,
    content: "すごいパーカーです。吸湿性と保温性が高いです。"
  },
  {
  	title: "すごいレインウェア",
    img: "img/jacket_01.jpg",
    price: 75000,
    content: "すごいレインウェアです。透湿性と防水性が高いです。"
  },
  {
  	title: "すごいザック",
    img: "img/zak_01.jpg",
    price: 24000,
    content: "すごいレインザックです。たくさん入ります。"
  },
  {
    title: "すぎちゃん",
    img: "img/sugi_01.jpg",
    price: 0,
    content: "お坊さんです。"
  },
  {
    title: "すごいパーカー",
    img: "img/parker_01.jpg",
    price: 38000,
    content: "すごいパーカーです。吸湿性と保温性が高いです。"
  },
  {
    title: "すごいレインウェア",
    img: "img/jacket_01.jpg",
    price: 75000,
    content: "すごいレインウェアです。透湿性と防水性が高いです。"
  },
  {
    title: "すごいザック",
    img: "img/zak_01.jpg",
    price: 24000,
    content: "すごいレインザックです。たくさん入ります。"
  },
  {
    title: "すぎちゃん",
    img: "img/sugi_01.jpg",
    price: 0,
    content: "お坊さんです。"
  }
];

export function fetchItemModel() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: DATA });
    }, 1000);
  });
}