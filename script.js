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
