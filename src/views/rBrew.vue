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
        <rBrewList/>
      </v-col>
      <v-col cols="6">
        <rBrewMap/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rBrewList from "../components/Brews/rBrewList";
import rBrewMap from "../components/Brews/rBrewMap";


export default {
  name: "rBrew",
  components: {
    rBrewList,
    rBrewMap
  },
  computed: {
    brews() {
      return this.$store.getters.getBrews
    }
  },
  mounted () {
    this.$store.dispatch('loadBrews')
  }
};
</script>
<!--
Added a getBrew getters to get state getBrews
Then added a mutation to set our brew state SET_BREWS
After the mutation created the action to call the API loadBrews (filtered and properties added
Added computed and mounted methods to run the loadBrews action
  
  curious is it better to call the state in the parent component and pass down via props or
  just call the state in the corresponding component

  my understanding is this you use state to neglect the use of props, whoever multiple calls to an
  API is probably viewed as bad so in this circumstance I will pass down as props
  Correction I just found a article saying this was a bad idea. I guess we run the mounted function
  here and then use brews() in computed in both components
Setup rBrewList pretty similar just a for loop that iterates through the computed brews
  we will come back to the event emit to cause the icon to enlarge later

We can see the map 
  no major edits we will incorporate .env later

time to incorporate the icons
  icons are incorporated no big changes here

Now lets implement the hovering events and changing the size of the icon
  we are going to try and change it see if we can make an action that changes the state based on
    hovering the list no need to pass the event up
  made a mutation of ENLARGE_ICON and an action of enlargeIcon made a method that dispatches and the method
    is bound to hover over
  just like that bada-bing bada-boom we're golden, delarge will follow the same

.env implementation
  process.env. dont forget VUE_APP then added to heroku
-->

<style scoped></style>