<script setup>

</script>

<template>

<h1>Log In</h1>
<!-- <p> userId is pulled like this:  {{ globalUser }} </p> -->
<p> user fname is pulled like this:  {{ User_Object.U_fname }} </p>
<!-- need to fetch based on userid -->

</template>

<style>

</style>

<script>
export default {

  inject: ['User_Object']

};
</script>