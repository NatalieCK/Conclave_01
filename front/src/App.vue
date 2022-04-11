

<template>
<div>

<SignUp />

<div :class="{ hidden: modal }" >
<Welcome />
</div>


<router-view></router-view>

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
  components: { ConclaveIntro },
  data() {
    return {
      modal: false,
    };
  }
};
</script>

<script setup>
import Welcome from './components/Welcome.vue';
import ConclaveIntro from './views/ConclaveIntro.vue';
import SignUp from './views/SignUp.vue';

</script>