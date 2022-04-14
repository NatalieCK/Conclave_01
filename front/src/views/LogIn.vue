<script setup>
import SignInHeader from "../components/SignInHeader.vue";
</script>

<template>
 <SignInHeader />

  

<!-- <div class="code_box">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
  <input type="number" id="quantity" name="quantity" min="1" max="9">
</div> -->

<div class="login_input">
  <h1 class="login_title">Login to Conclave</h1>
  <input type="text" name="userid"  placeholder="User ID" :value="storedUserObj._id" />
  <input type="text" name="userpass"  placeholder="Password" :value="storedUserObj.U_password" />
<div class="no_pass">
  <p>Don't have an account? <router-link to="/signup">Sign Up</router-link> </p>
</div>
  <div class="login_btn"><router-link to="/">LOGIN</router-link></div>
</div>
<!-- <br>
<p>
    Injected User_Id  {{ localUserObj._id }}
  </p>
  <p>Injected User Password {{localUserObj.U_password}}</p>

  <br> -->


  <!-- <p>
    Injected User_Id (can NOT directly reach .properties via
    User_Object.U_fname) {{ User_Id }}
  </p> -->
  <!-- <p>broken sample fname: {{User_Object.U_fname}} </p>
<br>
<p>Local Variable loaded with injected value, it CAN reach sub properties via localUserObj.U_fname {{localUserObj}}</p>
<p>working sample fname: {{localUserObj.U_fname}} </p> -->


</template>

<style>
.login_title{
  align-self: flex-start;
  font-weight: 700;
}
.login_input {
  margin: 150px 10% 0px 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input[type=text]{
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #9369CE;
  background: none;
  display: flex;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 16px;
}

.login_btn {
  margin-top: 25px;
  width: 100px;
  background-color: #63B798;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
  /* text-decoration: none; */
}

</style>

<script>
export default {
  data() {
    return {
      //  userData: {
    
      // }
        // localUserObj:{}
    };
  },
  // methods: {
  //   async getUser(userID) {
  //     const response = await fetch("http://localhost:4000/users/get/" + userID);
  //     const fetchedData = await response.json();
  //     this.userData = fetchedData;
  //   },
  // },
    created(){
      // this.localUserObj = this.User_Object;
      // console.log(this.localUserObj);
      let temp = localStorage.getItem('storedUserObj');
       this.storedUserObj = JSON.parse(temp);

      // let userData = JSON.parse(temp);
      // console.log('this'+userData.U_fname);
      // console.log('hello');
    },

  // inject: ["User_Object"],
  
};
</script>