<script setup>
import SignInHeader from "../components/SignInHeader.vue";
import ReturnID from "./ReturnID.vue";
</script>

<template>
<div>
  <SignInHeader />

  <h1>Sign Up</h1>

  <input type="text" v-model="inputUserData.U_fname" placeholder="First Name" />
  <input type="text" v-model="inputUserData.U_lname" placeholder="Last Name" />
  <input type="text" v-model="inputUserData.U_initial" placeholder="Initial" />
  <input type="text" v-model="inputUserData.U_email" placeholder="Email" />
  <input
    type="text"
    v-model="inputUserData.U_password"
    placeholder="Password"
  />
  <input type="text" v-model="inputUserData.U_status" placeholder="Status" />

  <span class="signupbtn" @click="addUser">Sign Up</span>

  </div>
</template>

<style>

.signupbtn {
  background-color: white;
  color: navy;
  padding: 10px;
}
</style>


<script>
export default {
  data() {
    return {
      usersData: [],
      inputUserData: {
        U_fname: "",
        U_lname: "",
        U_initial: "",
        U_email: "",
        U_password: "",
        U_status: "",
        U_logIn: false,
      },
    };
  },
  methods: {
    async fetchAPI() {
      const response = await fetch("http://localhost:4000/users/");
      const fetchedData = await response.json();
      this.usersData = fetchedData;
    },
    async addUser() {
      const response = await fetch("http://localhost:4000/users/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
    this.$emit("userDetailsCreated", fetchedData),
    console.log(fetchedData)
       },
    async delUser(userID) {
      const fetchURL = "http://localhost:4000/users/delete/" + userID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async updateUser(userID) {
      const fetchURL = "http://localhost:4000/users/update/" + userID;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
  },
  created() {
  
  },
  emits:["userDetailsCreated"]
};
</script>
