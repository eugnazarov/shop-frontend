const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

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
    this.getItems().then((data) => {
      this.items = [...data.contents];
      this.render();
    });
  }

  //Cart methods

  addItem() {
    return fetch(`${API}/addToBasket.json`).then((result) => result.json);
  }
  removeItem() {
    return fetch(`${API}/deleteFromBasket.json`).then((result) => result.json);
  }

  getItems() {
    return fetch(`${API}/getBasket.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let listHtml = "";
    this.items.forEach((item) => {
      const cartItem = new Cart(item.product_name, item.price);
      listHtml += cartItem.render();
    });
    document.querySelector(".cart").innerHTML = listHtml;
  }
}

class CartItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
    <div class="cart-item">
    <img src="" width=150 height = 150></img>
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>
    `;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this._getProducts().then((data) => {
      this.goods = [...data];
      this.render();
    });
  }

  calculateTotal() {
    let total = 0;
    this.goods.forEach((good) => {
      total += good.price;
    });
    return total;
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodsItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodsItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
const cart = new Cart();
