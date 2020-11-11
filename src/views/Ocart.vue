<template>
  <v-container>
    <v-row class="nav">
      <router-link to="/store">Home</router-link> |
      <router-link to="/cart">
        Cart<CounterBadge></CounterBadge>
      </router-link>
    </v-row>
    <v-list class="cart-list">
      <v-subheader class="header">Cart</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="item in cartItems"
          :key="item.id"
          class="cart-list_item"
        >
          <v-img :src="makeImagePath(item)" class="thumbnail" alt=""></v-img>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-content>
              <p>Size: {{ item.size }} </p>
              <p>Color: {{ item.color }}</p>
              <p class="price">Price: ${{ item.price}} </p>
              <button
                @click="removeFromCart(item.id)"
                class="btn-remove">
                  Remove
              </button>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import { imagePath } from '../mixins/imagePath.js'
import CounterBadge from "../components/Ostore/CounterBadge"

export default {
  name: 'cart',
  components: { CounterBadge },
  mixins: [imagePath],
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  text-align: right;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  font-size: 26px;
}

.cart-list {
  width: 100%;
}
.cart-list_item {
  margin: auto;
  width: 75%;
  border-bottom: 1px solid #2c3e50
}
.price {
  text-align: right;
}
.btn-remove {
  text-align: right;
  margin-top: 5px;
  outline: none;
  &:hover {
    color: red;
  }
}

.thumbnail {
  margin: 20px;
  max-width: 100px;
}
</style>