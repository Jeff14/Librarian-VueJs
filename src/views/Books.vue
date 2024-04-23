<template>
  <v-list subheader>
    <top-appbar title="books"></top-appbar>
    <v-list-item v-for="i in item" :key="i._id" class="list-item">
      <v-list-item-avatar>
        <v-img :alt="`${i.title} avatar`" :src="i.img"></v-img>
      </v-list-item-avatar>

      <v-col>
        <v-list-item-title>{{ i.title }}</v-list-item-title>

        <v-list-item-title>{{ i.author.name }}</v-list-item-title>

        <v-list-item-title>Pages: {{ i.pages }}</v-list-item-title>
      </v-col>

      <v-list-item-content> </v-list-item-content>
      Status
    </v-list-item>
  </v-list>
</template>

<script>
import booksItem from "@/data/books.json";
import TopAppbar from "@/components/TopAppbar.vue";

export default {
  components: { TopAppbar },
  data() {
    return {
      item: booksItem,
    };
  },
};
</script>
