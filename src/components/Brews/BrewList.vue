<template>
  <v-card class="brew-list">
    <v-list class="brew-list">
      <v-list-item-group>
        <v-list-item
          v-for="(brew, index) in clean"
          :key="index"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
        >
          {{ brew.name }}, {{ brew.state }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "BrewList",
  props: {
    clean: Array,
  },
  methods: {
    mouseOver: function(index) {
      this.$emit("mouse-over-brew", index);
    },
    mouseLeave: function(index) {
      this.$emit("mouse-left-brew", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.brew-list {
  overflow-y: auto;
  margin: auto;
  height: 68vh;
}
</style>
