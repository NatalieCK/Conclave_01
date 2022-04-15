<script setup>
import SignInHeader from "../components/SignInHeader.vue";
</script>

<template>
  <SignInHeader />

  <div class="login_input">
    <h1 class="login_title">Login to Conclave</h1>
    <input
      type="text"
      name="userid"
      placeholder="User ID"
      :value="localUserObj._id"
    />
    <input
      type="text"
      name="userpass"
      placeholder="Password"
      :value="localUserObj.U_password"
    />
    <div class="no_pass">
      <p>
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
    <div class="login_btn"><router-link to="/">LOGIN</router-link></div>
  </div>
 
</template>

<style>
.login_title {
  align-self: flex-start;
  font-weight: 700;
}
.login_input {
  margin: 150px 10% 0px 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #9369ce;
  background: none;
  display: flex;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 16px;
}

.login_btn {
  margin-top: 25px;
  width: 100px;
  background-color: #63b798;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
}
</style>

<script>
export default {
  data() {
    return {
      localUserObj: {},
    };
  },
  methods: {
    async getUser() {
      const response = await fetch(
        "http://localhost:4000/users/get/" + this.storedUserObj._id
      );
      const fetchedData = await response.json();
      this.localUserObj = fetchedData;
    },
  },
  created() {
    let temp = localStorage.getItem("storedUserObj");
    this.storedUserObj = JSON.parse(temp);
    this.getUser();
  },
};
</script>