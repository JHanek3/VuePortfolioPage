<template>
  <span v-if="cartCount > 0" class="myBadge">
    {{ cartCount }}
  </span>
</template>

<script>
  export default {
    name: 'CounterBadge',
    computed: {
      cartCount() {
        return this.$store.state.cart.length
    }
    }
  }
</script>

<style lang="scss">

.myBadge {
  margin-top: -115%;
  margin-left: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #42b983;
  color: #FFF;
  font-weight: bold;
  font-size: 12px;
  
}
</style>