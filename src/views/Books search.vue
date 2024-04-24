<template>
  <v-list subheader>
    <top-appbar :title="`Books - Search: ${s}`"></top-appbar>
    <v-list-item v-for="book in filteredBooks" :key="book._id">
      <v-list-item-avatar>
        <v-img :alt="`${book.title} avatar`" :src="book.img"></v-img>
      </v-list-item-avatar>

      <v-col>
        <v-list-item-title>{{ book.title }}</v-list-item-title>
        <v-list-item-title>{{ book.author.name }}</v-list-item-title>
        <v-list-item-title>Pages: {{ book.pages }}</v-list-item-title>
      </v-col>

      <v-list-item-content></v-list-item-content>
      Status
    </v-list-item>
  </v-list>
</template>

<script>
import booksItem from "@/data/books.json";
import TopAppbar from "@/components/TopAppbar.vue";

export default {
  components: { TopAppbar },
  props: {
    s: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      item: booksItem,
    };
  },
  computed: {
    filteredBooks() {
      if (!this.s) {
        // If the search string is empty, return all books
        return this.item;
      } else {
        // If the search string is not empty, filter books that contain the search string in their titles
        return this.item.filter((book) =>
          book.title.toLowerCase().includes(this.s.toLowerCase())
        );
      }
    },
  },
};
</script>
