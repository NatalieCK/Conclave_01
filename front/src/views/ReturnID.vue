
<template>

<div>
<h2>return id</h2>
  <!-- user.vue -->
<div>
    <h3>User_ID: {{ userProp._id }}</h3>
    <!-- <h3>Fname: {{ userProp.U_fname }}</h3>
    <h3>Lname: {{ userProp.U_lname }}</h3>
    <h3>Initial: {{ userProp.U_initial }}</h3>
    <h3>Email: {{ userProp.U_email }}</h3>
    <h3>Password: {{ userProp.U_password }}</h3>
    <h3>Status: {{ userProp.U_status }}</h3>
    <h3>Logged In: {{ userProp.U_logIn }}</h3> -->
</div>
    
    <span @click="delEmit">Delete </span>
    <span @click="updateEmit">Update</span>
</div>
</template>
<script>
export default {
  methods: {
    delEmit() {
      this.$emit("delUserEmit", this.userProp._id);
    },
    updateEmit() {
      this.$emit("updUserEmit", this.userProp._id);
    },
  },
  emits: ["delUserEmit", "updUserEmit"],
};
</script>
<script setup>
defineProps({
  userProp: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
/* div {
  margin: 5px;
  background-color: green;
}

span {
  background-color: white;
}

h3 {
  margin: 2px;
} */
</style>