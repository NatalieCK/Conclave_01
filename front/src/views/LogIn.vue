<script setup>

</script>

<template>

<h1>Log In</h1>
<p> Injected User_Id (can NOT directly reach .properties via User_Object.U_fname) {{ User_Id }} </p>
<!-- <p>broken sample fname: {{User_Object.U_fname}} </p>
<br>
<p>Local Variable loaded with injected value, it CAN reach sub properties via localUserObj.U_fname {{localUserObj}}</p>
<p>working sample fname: {{localUserObj.U_fname}} </p> -->



<div class="login_btn">
    
</div>

</template>

<style>

</style>

<script>
export default {
  data(){
    return{
    //   localUserId:{}
    }
  },
//   created(){
//     this.localUserId = this.User_Id;
//   },

  inject: ['User_Id']

}
</script>