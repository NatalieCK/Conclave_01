<script setup>
import SignInHeader from "../components/SignInHeader.vue";
</script>

<template>
 <SignInHeader />

  <h1>Log In</h1>
  <!-- <p>
    Injected User_Id (can NOT directly reach .properties via
    User_Object.U_fname) {{ User_Id }}
  </p> -->
  <!-- <p>broken sample fname: {{User_Object.U_fname}} </p>
<br>
<p>Local Variable loaded with injected value, it CAN reach sub properties via localUserObj.U_fname {{localUserObj}}</p>
<p>working sample fname: {{localUserObj.U_fname}} </p> -->

  <div class="login_btn"><router-link to="/">LOGIN</router-link></div>
</template>

<style>

.login_btn {
  width: 100px;
  text-align: center;
   background-color: #63B798;
    padding: 10px;
    border-radius: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      //   localUserId:{}
    };
  },
  methods: {
    async getUser(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.userData = fetchedData;
    },
  },
  //   created(){
  //     this.localUserId = this.User_Id;
  //   },

  inject: ["User_Id"],
};
</script>