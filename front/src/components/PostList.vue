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
    },
    async addPost() {
      const response = await fetch("http://localhost:4000/posts/addpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputPostData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async delPost(postID) {
      const fetchURL = "http://localhost:4000/posts/delete/" + postID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async updatePost(postID) {
      const fetchURL = "http://localhost:4000/posts/update/" + postID;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputPostData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<script setup>
import Post from "./Post.vue";
</script>