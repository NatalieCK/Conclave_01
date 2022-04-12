

<template>
  <div>
    <SignUp @userDetailsCreated="myDetails" />
    <LogIn  />

    <div :class="{ hidden: modal }">
      <Welcome />
    </div>

    <router-view @userDetailsCreated="myDetails"></router-view>
  </div>

</template>

<style>
@import "./assets/base.css/";

.hidden {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      modal: false,
      localUser: {
        U_fname: "placeholder",
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
    myDetails(input) {
      this.localUser = input;
    }
    
  },
  provide() {
    return {
      User_Object: computed(() => this.localUser)
    }
  }
};
</script>

<script setup>
import Welcome from "./components/Welcome.vue";
import LogIn from "./views/LogIn.vue";
import SignUp from "./views/SignUp.vue";
import { computed } from 'vue';
</script>