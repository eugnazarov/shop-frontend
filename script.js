const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Boots", price: 150 },
  { title: "Coat", price: 1250 },
  { title: "Hat", price: 50 },
];

const renderGoodsItem = (title = "Товар", price = 150) => {
  return `
  <div class="goods-item">
  <img src="" width=150 height = 150></img>
  <h3>${title}</h3>
  <p>${price}</p>
  </div>
  `;
};

const renderGoodsList = (list) => {
  let goodsList = list
    .map(({ title, price }) => renderGoodsItem(title, price))
    .join("");

  document.querySelector(".goods-list").innerHTML = goodsList;
};

renderGoodsList(goods);