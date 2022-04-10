

<template>

<div :class="{ hidden: modal }" >
<Welcome />
</div>



<router-view></router-view>


</template>



<style>

@import './assets/base.css/';

.hidden {
  display: none;
}



</style>

<script>
export default {
  data() {
    return {
      modal: false,
    };
  }
};
</script>

<script setup>
import Welcome from './components/Welcome.vue';
</script>