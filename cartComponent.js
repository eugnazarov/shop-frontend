Vue.component("cart", {
  props: ["cartItems"],
  template: `
  <div id="cart" class="cart hidden">     
  <div class="cart-container">
    <h2 class="cart-name">Корзина</h2>
    <div class="cart-list">
      <cart-item v-for="item of cartItems" :item=item>
       
      </cart-item>
    </div>
  </div>
</div>
    `,
});

Vue.component("cart-item", {
  props: ["item"],
  template: `
    <div class="cart-item">
          <h3 >{{item.product_name}}: {{item.quantity}}</h3>
          <button class="cart-btn" @click="$parent.$emit('add',item)">+</button>
          <button class="cart-btn" @click="$parent.$emit('remove',item)">-</button>
          <button @click="$parent.$emit('delete',item)" class="cart-delete">удалить</button>
                </div>
    `,
});
