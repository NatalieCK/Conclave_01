<template>
  <h1>{{ userData.U_fname }} {{ userData.U_lname }}</h1>
  <textarea v-model="postData.P_content" rows="4" cols="40" placeholder="Post" />
  <span @click="fillPostData">submit</span>
</template>
<style scoped>
textarea{
  resize: none;
}

</style>

<script>
export default {
  data() {
    return {
      userData: {
        U_fname: "",
        U_lname: "",
        U_initial: "",
        U_email: "",
        U_password: "",
        U_status: "",
        U_logIn: "",
      },
      postData: {
        P_userID: "",
        P_fname: "",
        P_lname: "",
        P_initial: "",
        P_status: "",
        P_content: "",
        P_likes: 0,
        P_comments: 0,
      },
    };
  },
  methods: {
    async getUser(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.userData = fetchedData;
    },
    async addPost(inputPostData) {
      const response = await fetch("http://localhost:4000/posts/addpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputPostData),
      });

      this.$emit("PostListTrigger");
      this.postData = {
        P_userID: "",
        P_fname: "",
        P_lname: "",
        P_initial: "",
        P_status: "",
        P_content: "",
        P_likes: 0,
        P_comments: 0,
        P_postComments: [],
      };
    },
    fillPostData(){
      if(this.postData.P_content==""){
        console.log("no content");
        return;
      };
      this.postData.P_userID=this.userData._id;
      this.postData.P_fname=this.userData.U_fname;
      this.postData.P_lname=this.userData.U_lname;
      this.postData.P_initial=this.userData.U_initial;
      this.postData.P_status=this.userData.U_status;
      this.addPost(this.postData);
      console.log(this.postData)
    }
  },
  created() {
    const currentUserID = "62550ea9903b5e4fb166f9cb";
    this.getUser(currentUserID);
  },
  emits: ["PostListTrigger"]
};
</script>