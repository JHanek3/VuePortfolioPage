<template>
  <v-container>
    <v-row class="nav">
      <router-link to="/store">Home </router-link> | 
      <router-link to="/cart"> 
      Cart <CounterBadge></CounterBadge>
      </router-link>
    </v-row>
    <h2 class="header">Featured Items</h2>
    <v-row class="wrapper">
      <ul class="featured-items">
        <li
          v-for="product in products"
          :key="product.id"
          class="featured-items__item"
        >
        <router-link :to="{name: 'Oproduct', params: {id: product.id}}">
          <img class="product-image" :src="makeImagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }} </em></p>
        </router-link>
        </li>
      </ul>
    </v-row>
  </v-container>
</template>

<script>
import { imagePath } from "../mixins/imagePath.js"
import CounterBadge from "../components/Ostore/CounterBadge"

export default {
  name: 'Ostore',
  mixins: [imagePath],
  components: { CounterBadge },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/products/${product.images[0]}`)
    }
  }

}
</script>

<style lang="scss">
.nav {
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
  text-align: center;
}
.wrapper {
  justify-content: center;
  margin-top: 10px;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 450px;
}
.product-title {
  font-weight: bold;
}

</style>