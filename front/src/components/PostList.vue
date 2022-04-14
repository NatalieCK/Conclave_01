<template>
<WritePost @PostListTrigger="fetchAPI" />

  <Post
    v-for="post in postsData.slice().reverse()"
    :key="post._id"
    :postProp="post"
    @delPostEmit="delPost"
    @updPostEmit="updatePost"
  />
</template>

<script>
export default {
  data() {
    return {
      postsData: [],
    };
  },
  methods: {
    async fetchAPI() {
      const response = await fetch("http://localhost:4000/posts/");
      const fetchedData = await response.json();
      this.postsData = fetchedData;
    },
    async delPost(postID) {
      const fetchURL = "http://localhost:4000/posts/delete/" + postID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async updatePost(postData) {
      const fetchURL = "http://localhost:4000/posts/update/" + postData._id;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    }
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<script setup>
import Post from "./Post.vue";
import WritePost from "./WritePost.vue";
</script>