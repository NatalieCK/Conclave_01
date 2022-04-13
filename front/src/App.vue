

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
      localUserId: "",
    };
  },
  methods: {
    myDetails(input) {
      this.localUserId = input;
    }
    
  },
  provide() {
    return {
      User_Id: computed(() => this.localUserId)
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