<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center text-info">Chicago Breweries List</h1>
        <h4 class="text-center text-info">
          Icons made by
          <a href="https://www.flaticon.com/authors/surang" title="surang"
            >surang</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com</a
          >
        </h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <BrewList
          :clean="clean"
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
        />
      </v-col>
      <v-col cols="6">
        <BrewMap :clean="clean" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import BrewList from "../components/Brews/BrewList";
import BrewMap from "../components/Brews/BrewMap";
import axios from "axios";

export default {
  name: "Brew",
  components: {
    BrewList,
    BrewMap,
  },
  data() {
    return {
      brews: [],
      clean: [],
      latLng: [],
      normalIcon: [40, 40],
      largeIcon: [60, 60],
      componentKey: 0,
    };
  },
  mounted: function() {
    axios
      .get(
        "https://api.openbrewerydb.org/breweries?by_city=chicago&per_page=50"
      )
      .then((r) => {
        this.brews = r.data;
        this.clean = this.brews.filter((r) => r.latitude !== null);
        this.clean = this.clean.map((r) => {
          // console.log(r.latitude);
          // console.log(r.longitude);
          r.latLng = [r.latitude, r.longitude];
          r.iconSize = this.normalIcon;
          // console.log(typeof r);
          return r;
        });
      });
  },
  methods: {
    mouseOverBrew: function(index) {
      console.log("enter " + index);
      // console.log(this.clean[index]);

      //this code is outdated, zoom problem probably here
      // this.clean[index].iconSize = this.largeIcon;

      //Possible Fix, if this doesnt work might need vuex
      Vue.set(this.clean[index], "iconSize", this.largeIcon);
      // this.forceRerender(); :key="componentKey"
      console.log(this.clean[index].iconSize);
    },
    mouseLeftBrew: function(index) {
      console.log("--------------------------------------");
      //Outdated
      // this.clean[index].iconSize = this.normalIcon;

      //Fix?
      Vue.set(this.clean[index], "iconSize", this.normalIcon);
      console.log(this.clean[index].iconSize);
      console.log("leave " + index);
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>

<style scoped></style>
