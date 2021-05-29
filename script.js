class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
    <div class="goods-item">
    <img src="" width=150 height = 150></img>
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>
    `;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  //Cart methods
  addItem() {}
  removeItem() {}
  calculateTotal() {}
  applyDiscount() {}
}

class CartItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {}
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Boots", price: 150 },
      { title: "Coat", price: 1250 },
      { title: "Hat", price: 50 },
    ];
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodsItem = new GoodsItem(good.title, good.price);
      listHtml += goodsItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
