<template>
  <v-card class="brew-list">
    <v-list class="brew-list">
      <v-list-item-group>
        <v-list-item
          v-for="brew in brews"
          :key="brew.id"
          @mouseover="enlargeIcon(brew.id)"
          @mouseleave="delargeIcon(brew.id)"
        >
        {{brew.name}} | {{brew.city}}, {{brew.state}}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "rBrewList",
  computed: {
    brews() {
      return this.$store.getters.getBrews
    }
  },
  methods: {
    enlargeIcon: function(id) {
      this.$store.dispatch("enlargeIcon", id)
    },
    delargeIcon: function(id) {
      this.$store.dispatch("delargeIcon", id)
    }
  }
}

</script>

<style scoped>
.brew-list {
  overflow-y: auto;
  margin: auto;
  height: 68vh;
}
</style>