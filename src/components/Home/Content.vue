<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>About Me</h2>
        <p>
          Self-Taught Web Developer with a background in BioChemistry. My degree
          in BioChemistry has provided me with a wide array of analytical and
          problem-solving skills that help with web development No Industry
          experience as of yet, looking to get into the field. I specialize in
          ReactJS, but a potential job opportunity arose so I decided to create
          this page along with some projects to get my feet wet with the
          language.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Education</h2>
        <p>
          <b
            >Bachelor's of BioChemistry | University of Illinois at Chicago |
            May 2019</b
          ><br />
          <span class="indent"
            >Published a paper as the 4th author in the Proteomics Science
            Journal</span
          >
        </p>

        <p>
          <b
            >Self-Taugh Web Developer | UDemy, Coursera, Reddit, Stack Overflow,
            and Official Docs | Present</b
          ><br />
          <span class="indent"
            >A wizard at reading docs, excel at learning quickly and applying
            new topics</span
          >
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Experience</h2>
        <p>
          All my experience is gained through the projects I have created and
          the certificates I've achieved. Take a look at my projects in the
          Navigation bar.
        </p>
        <div class="text-center">
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="black" dark v-bind="attrs" v-on="on">
                Certificates
              </v-btn>
            </template>

            <v-list>
              <v-list-item-group>
                <v-list-item v-for="(cert, index) in certs" :key="index">
                  <v-list-item-title>
                    {{ cert }}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="myCircles">
        <h2>Skills</h2>
        <v-progress-circular
          v-for="(skill, index) in skills"
          :key="index"
          class="ma-3"
          size="100"
          :value="skill.value"
          rotate="270"
          >{{ skill.label }}</v-progress-circular
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    certs() {
      return this.$store.getters.getCerts;
    },
    skills() {
      return this.$store.getters.getSkills;
    },
  },
};
</script>

<style scoped>
.indent {
  margin-left: 20px;
}
</style>
