<template>
    <h1>{{usersData.U_fname}} {{usersData.U_lname}}</h1>
</template>
<style scoped>


</style>

<script>
export default {
  data() {
    return {
      usersData: {
        U_fname: "",
        U_lname: "",
        U_initial: "",
        U_email: "",
        U_password: "",
        U_status: "",
        U_logIn: "",
      },
    };
  },
  methods: {
    async fetchAPI(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.usersData = fetchedData;
    }
  },
  created() {
    const currentUserID = "62550ea9903b5e4fb166f9cb";
    this.fetchAPI(currentUserID);
  },
};
</script>