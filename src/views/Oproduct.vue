<template>
  <v-container>
    <v-row class="nav">
      <router-link to="/store">Home</router-link> |
      <router-link to="/cart">
        Cart
        <CounterBadge></CounterBadge>
      </router-link>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="4"
        md="6"
        xs="12"
      >
        <img class="img" :src="makeImagePath(product)" alt="">
      </v-col>
      <v-col
        cols="12"
        lg="8"
        md="6"
        xs="12"
      >
        <h2>{{ product.name }}</h2>
        <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
        <p>Price: ${{ product.price }}</p>
        <p>Size: {{ product.size }}</p>
        <p>Color: {{ product.color }}</p>
        <p><em>{{ product.quantity }} left in stock</em></p>
        <h3>Details</h3>
        <ul>
          <li>Material: {{ product.details.material }}</li>
          <li>Fit: {{ product.details.fit }}</li>
          <li>Maintenance: {{ product.details.maintenance }}</li>
          <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { imagePath } from "../mixins/imagePath.js"
import CounterBadge from "../components/Ostore/CounterBadge"

export default {
  name: 'Oproduct',
  mixins: [imagePath],
  components: { CounterBadge },
  data() {
    return {
        product: this.$store.getters.getProduct(this.$route.params.id)
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
    },
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
</script>

<style lang="scss" >

.img {
  max-height: 100%;
  max-width: 100%

}

.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  background-color: #2c3e50;
  color: #FFF;
  &:hover, &:focus {
    background-color: #42b983;
  }
}

</style>