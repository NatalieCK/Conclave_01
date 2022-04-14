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
      <input
        type="text"
        v-model="inputUserData.U_initial"
        placeholder="Initial"
      />
      <input type="text" v-model="inputUserData.U_email" placeholder="Email" />
      <input
        type="text"
        v-model="inputUserData.U_password"
        placeholder="Password"
      />
      <!-- <input type="text" v-model="inputUserData.U_status" placeholder="Status" /> -->

      <select name="status" v-model="inputUserData.U_status">
        <option value="Attendee">Attendee</option>
        <option value="Speaker">Speaker</option>
      </select>

      <span class="signupbtn" @click="addUser">Sign Up</span>
    </div>

    <div :class="{ idhidden: IdDisplay }">
      <p>your user id is as follows:</p>
      <p>
        {{ localUserObj._id }}
      </p>
      <p>click <router-link to="/login">HERE</router-link> to login</p>
    </div>
  </div>
</template>

<style>

*{
  font-family: 'Inter';
  color: white!important;

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
select{
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #9369CE;
  background: none;
  display: flex;
  margin: 10px 0px;
  font-weight: 600;
  font-size: 16px;
  color: white;
}

</style>


<script>
export default {
  components: { LogIn },
  data() {
    return {
      localUserObj:{},
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
      const response = await fetch("http://localhost:4000/users/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.inputUserData),
      });
      const fetchedData = await response.json();
    this.$emit("userDetailsCreated", fetchedData),
 localStorage.setItem('storedUserObj', JSON.stringify(fetchedData));
    console.log(fetchedData),
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
  this.localUserObj = this.User_Object;
  },

   inject: ["User_Object"],
  
  emits:["userDetailsCreated"]
};
</script>
