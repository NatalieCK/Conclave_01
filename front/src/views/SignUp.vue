<script setup>
import SignInHeader from "../components/SignInHeader.vue";
import ReturnID from "../components/ReturnID.vue";
</script>

<template>
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

  <span @click="addUser">Sign Up</span>

  <returnID />
  <!-- need v-for here to return user id -->
</template>

<style>
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
        U_logIn: "",
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
      this.fetchAPI();
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
    this.fetchAPI();
  },
};
</script>
