<template>
  <v-container id="container">
    <div id="mapContainer"></div>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";

export default {
  name: "Map",
  data() {
    return {
      mapToken: process.env.VUE_APP_MAP_TOKEN,
    };
  },
  methods: {
    //renders the leaflet map
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView([41.881832, -87.623177], 12);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken: this.mapToken,
        }
      ).addTo(mapDiv);
      //Make a marker, circle, and polygon
      const marker = L.marker([41.881832, -87.623177]);
      marker.addTo(mapDiv);

      const circle = L.circle([41.9484, -87.6553], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 300,
      });
      circle.addTo(mapDiv);

      const polygon = L.polygon([
        [41.93, -87.7],
        [41.9, -87.7],
        [41.89, -87.62718],
      ]);
      polygon.addTo(mapDiv);

      marker
        .bindPopup("<b>Hello world!</b><br>I am a marker in Chicago.")
        .openPopup();
      circle.bindPopup("The cubs play somewhere over here!");
      polygon.bindPopup("I am a polygon.");

      // const popup = L.popup();
      // popup
      //   .setLatLng([41.9, -87.69])
      //   .setContent("Scroll over the other objects");
      // .openOn(mapDiv);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  margin: auto;
  width: 800px;
  height: 625px;
}
</style>
