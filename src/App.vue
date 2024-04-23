<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <h2>Librarian</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="login1"> login </v-btn>

      <v-btn text>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main-container">
      <router-view />
      <bottom-navbar></bottom-navbar>
    </v-main>
  </v-app>
</template>

<script>
import BottomNavbar from "./components/BottomNavbar.vue";
import axios from "axios";

export default {
  components: { BottomNavbar },
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    login1() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
@import url("@/assets/styles.css");
.main-container {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVWg2E_wAqMMfOnAmWmuVK2o4LR9ogwd3ZA&usqp=CAU"); /* Specify the path to your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
}
</style>
