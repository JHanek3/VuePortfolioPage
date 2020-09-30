<template>
  <div>
    <v-row class="map">
      <l-map
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker
          v-for="(brew, index) in clean"
          :key="index"
          :lat-lng="brew.latLng"
        >
          <l-icon
            class="icon"
            :icon-size="brew.iconSize"
            :icon-url="icon"
          ></l-icon>
        </l-marker>
      </l-map>
    </v-row>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import beer from "../../assets/beer.png";

export default {
  name: "BrewMap",
  props: {
    clean: Array,
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      zoom: 11,
      center: L.latLng(41.8781, -87.6298),
      markerLatLng: [41.8781, -87.6298],
      url:
        "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=c6dedb6ffbbb48318bd9878e64e722ce",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: beer,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  margin: auto;
  height: 68vh;
}
</style>
