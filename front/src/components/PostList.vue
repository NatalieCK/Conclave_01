<template>
  <Post
    v-for="post in postsData"
    :key="post._id"
    :postProp="post"
  />
</template>

<script>
export default {
  data() {
    return {
      postsData: [],
      inputPostData: {
        P_userID: "",
        P_fname: "",
        P_lname: "",
        P_initial: "",
        P_status: "",
        P_content: "",
        P_likes: "",
        P_comments: "",
      },
    };
  },
  methods: {
    async fetchAPI() {
      const response = await fetch("http://localhost:4000/posts/");
      const fetchedData = await response.json();
      this.postsData = fetchedData;
    }
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<script setup>
import Post from "./Post.vue";
</script>