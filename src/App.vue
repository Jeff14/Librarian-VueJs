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

    <v-main>
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
</style>
