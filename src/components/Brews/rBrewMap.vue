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
        v-for="brew in brews"
        :key="brew.id"
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
import {LMap, LTileLayer, LMarker, LIcon} from "vue2-leaflet"
import beer from "../../assets/beer.png";

export default {
  name: "rBrewMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 10,
      center: L.latLng(41.8781, -87.6298),
      markerLatLng: [41.8781, -87.6298],
      url:
        "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=" + process.env.VUE_APP_THUNDERFOREST,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: beer,
    }
  },
  computed: {
    brews() {
      return this.$store.getters.getBrews
    }
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
  }

}
</script>

<style scoped>
.map {
  margin: auto;
  height: 68vh;
}
</style>