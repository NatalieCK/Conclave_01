

<template>
<div>

    <div :class="{ hidden: modal }">
      <Welcome @closemodal="modal=true" />
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

      modal: true,
        localUser: {
        U_fname: "",
        U_lname: "",
        U_initial: "",
        U_email: "",
        U_password: "",
        U_status: "",
        U_logIn: false,
      },
      localUserId: "",

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