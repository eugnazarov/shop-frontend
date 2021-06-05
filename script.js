const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const App = new Vue({
  el: "#app",
  data: {
    catalogUrl: "/catalogData.json",
    cartUrl: "/getBasket.json",
    catalogImg: "https://via.placeholder.com/150",
    products: [],
    cartItems: [],
    search: "",
    cartOpened: false,
  },

  methods: {
    putToCart(product) {
      if (!this.cartOpened) {
        this.showCart();
      }
      const item = {
        product_name: product.product_name,
        quantity: 1,
        id_product: product.id_product,
      };
      let candidate = this.cartItems.find(
        (el) => el.id_product == item.id_product
      );
      console.log(candidate);
      candidate ? this.addItemToCart(candidate) : this.cartItems.push(item);
    },
    addItemToCart(item) {
      item.quantity++;
    },
    removeItemFromCart(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    },
    getJson(url) {
      return fetch(url).then((result) => {
        return result.json();
      });
    },
    loadProducts() {
      this.getJson(`${API + this.catalogUrl}`).then((data) => {
        data.forEach((elem) => {
          this.products.push(elem);
        });
      });
    },
    loadCart() {
      this.getJson(`${API + this.cartUrl}`).then((data) => {
        data.contents.forEach((elem) => {
          this.cartItems.push(elem);
        });
      });
    },
    showCart() {
      document.getElementById("cart").classList.toggle("hidden");
      this.cartOpened = !this.cartOpened;
    },
  },

  mounted() {
    this.loadCart();
    this.loadProducts();
  },
});
