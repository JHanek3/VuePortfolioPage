<template>
  <v-container>
    <v-row>
      <v-col
        v-for="hero in heroes"
        :key="hero.id"
        sm="12"
      >
        <p class="para">Hero: {{ hero.name }} </p>
        <p class="para">Alias: {{ hero.alias }} </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Heroes',
  computed: {
    heroes() {
      return this.$store.getters.getHeroes
    }
  },
  mounted () {
    this.$store.dispatch('loadHeroes')
  }
}
</script>

<style>
.para{
  text-align: center
}
</style>