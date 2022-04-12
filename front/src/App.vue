

<template>
<div>

<SignUp />
<Login />

<div :class="{ hidden: modal }" >
<Welcome />
</div>


<router-view @userDetailsCreated="myDetails" ></router-view>

</div>
</template>

<style>

@import './assets/base.css/';

.hidden {
  display: none;
}

</style>

<script>
export default {
  components: { ConclaveIntr, LogIno },
  data() {
    return {
      modal: false,
      globalUser: ""
    };
  }, 
  methods: {
      myDetails(input) {
          this.globalUser= input
      }
  },
  provide() {
    return {
      globalUser: this.globalUser
    }
  }
};
</script>

<script setup>
import Welcome from './components/Welcome.vue';
import ConclaveIntro from './views/ConclaveIntro.vue';
import LogIn from './views/LogIn.vue';
import SignUp from './views/SignUp.vue';

</script>