<script setup>
import SignInHeader from "../components/SignInHeader.vue";
import LogIn from "./LogIn.vue";
import ReturnID from "./ReturnID.vue";
</script>
<template>
  <div>
    <SignInHeader />
    <div class="form_container">
      <h1 class="sign_in_title">Sign Up</h1>
      <input
        type="text"
        v-model="inputUserData.U_fname"
        placeholder="First Name"
      />
      <input
        type="text"
        v-model="inputUserData.U_lname"
        placeholder="Last Name"
      />
      <input type="text" v-model="inputUserData.U_email" placeholder="Email" />
      <input
        type="text"
        v-model="inputUserData.U_password"
        placeholder="Password"
      />
      <select name="status" v-model="inputUserData.U_status">
        <option value="Attendee">Attendee</option>
        <option value="Speaker">Speaker</option>
      </select>
      <span class="signupbtn" @click="addUser">Sign Up</span>
    </div>
    
    <div :class="{ idhidden: IdDisplay }">
      <div class="userid_display">
      <p>Your USER ID is as follows:</p>
      <p>
        {{ localUserID }}
      </p>
      <p>Click <router-link class="here_btn" to="/login">HERE</router-link> to login.</p>
      </div>
    </div>
  </div>
</template>

<style>
*{
  font-family: 'Inter';
  color: white!important;
}

.here_btn {
  font-weight: 600 !important;
  color:#9369CE !important ;
}

.userid_display {
  text-align: center;
  margin-top: 20px;
}
.idhidden {
  display: none;
}
.sign_in_title {
  align-self: flex-start;
  font-weight: 700;
}
.signupbtn {
  width: 100px;
  background-color: #63b798;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
}
.form_container{
  margin: 50px 10% 0px 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
input[type="text"] {
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: 3px solid #9369CE;
  background: none;
  display: flex;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 16px;
}
select[name="status"]{
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #9369CE;
  background: none;
  display: flex;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 16px;
  color: #111127 !important;
}
</style>
<script>
export default {
  components: { LogIn },
  data() {
    return {
      localUserID:'',
      IdDisplay: true,
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
      this.inputUserData.U_initial= this.inputUserData.U_fname[0];
      const response = await fetch("http://localhost:4000/users/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
    this.$emit("userDetailsCreated", fetchedData),
 localStorage.setItem('storedUserObj', JSON.stringify(fetchedData));
    console.log(fetchedData),
    this.localUserID = fetchedData._id;
    this.IdDisplay = false
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
   // Below is the method we would use for provide/ inject (currently undergoing updates, not reliable)
  //  inject: ["User_Object"],
  emits:["userDetailsCreated"]
};
</script>