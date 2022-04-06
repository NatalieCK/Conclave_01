<script setup>

import Avatar from "./components/Avatar.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";

</script>

<template>

<router-link to="/">HOME_LINK</router-link>
<br>
<router-link to="/about">CONCLAVEINTRO_LINK</router-link>

<Avatar />
<router-view></router-view>
<LoadingAnimation />

</template>

<style>

@import './assets/base.css/';

</style>
