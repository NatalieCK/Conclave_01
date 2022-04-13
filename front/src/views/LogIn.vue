<script setup>
import SignInHeader from "../components/SignInHeader.vue";
</script>

<template>
 <SignInHeader />

  <h1>Conference Code</h1>

<div class="code_box">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
</div>

<div class="login_input">
  <input type="text" name="userid"  placeholder="user id" value="User_Id" />
  <input type="text" name="userpass"  placeholder="password" />
</div>
<br>
<p>
    Injected User_Id  {{ User_Id }}
  </p>
  <p>Injected User Password {{}}</p>

  <br>

<div class="no_pass">
  <p>Don't have an account? <router-link to="/signup">Sign Up</router-link> </p>
</div>
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

.login_input {
  display: flex;
  flex-direction: column;
}

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
       userData: {
    
      },
        localUserId:{}
    };
  },
  methods: {
    async getUser(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.userData = fetchedData;
    },
  },
    // created(){
    //   this.localUserId = this.User_Id;
    // },
  created() {
    this.localUserId = this.User_Id;
    const currentUserID = localUserId;
    console.log("example"+currentUserID);
   console.log(this.localUserId);
    this.getUser(currentUserID);
    
  },

  inject: ["User_Id"],
};
</script>