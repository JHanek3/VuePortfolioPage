<template>
<!-- npm install --save axios vue-axios -->
  <v-container>
    <v-row>
      <v-col
        v-for="joke in jokes"
        :key="joke.id"
        md="6"
        sm="12"
      >
        <v-card class="mx-auto jokeCard">
          <v-card-text>
            <div class="text--primary setup">
              {{ joke.setup }}
            </div>
          </v-card-text>
          <v-btn
            class="ma-2"
            color="primary"
            @click="togglePunch(joke.id)"
          >
            Punchline
          </v-btn>
        <v-expand-transition>
          <v-card
            v-show="joke.expand"
            class="mx-auto punch"
          >{{ joke.punchline }}</v-card>
        </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Jokes',
  computed: {
    //put our store data into computed, i think it makes it easier to be mutable when calling APIs
    jokes() {
      return this.$store.getters.getJokes
    }
  },

  //add mapState to computed, so we can get access to the jokes
  //you dont really need mapState if we use store.getters to get our state
  // computed: mapState([
  //   'jokes'
  // ]),

  //when the component mounts, run the loadJokes action, this calls the api
  mounted () {
    this.$store.dispatch('loadJokes')
  },
  methods: {
    //on click all open, time to make it so only one opens
    //added a mutation called SHOW_PUNCH
    //then added a action called togglePunch
    togglePunch: function(id) {
      //@ click grabs the joke id so we know which to toggle with
      // console.log(id)
      this.$store.dispatch("togglePunch", id)
    }
  }
}
</script>

<style scoped>
.jokeCard {
  text-align: center;
  max-width: 344px;
  height: 250px;
}

.setup {
  font-size: 26px;
  text-align: center;
  line-height: 1.25em;
}

.punch {
  height: auto;
  width: 100;
  background: rgb(64, 182, 182);

}
</style>
