<template>
  <div class="app-header">
    <v-row>
      <v-col cols="10">
        <h3>{{ title }}</h3>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn @click="addButtonClick"><v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-text-field
      v-model="searchQuery"
      label="Search"
      append-outer-icon="mdi-search-web"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      searchQuery: "", // Data property to store the search query
    };
  },
  methods: {
    addButtonClick() {
      this.$router.push({
        name: "bsearch", // Name of the route you want to navigate to
        params: {
          s: this.searchQuery,
          bs: this.searchQuery,
          // Add more props as needed
        },
        // Define what happens when the add button is clicked
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  padding: 2rem;
}
</style>
