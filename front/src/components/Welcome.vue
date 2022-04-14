<script setup>
// import Something from '../components'

</script>

<template>

<div class="welcome_page">


<div class="logo">
<img src="../assets/LOGO(1).png" alt="Conclave Logo">
</div>

<div class="welcome_div">
    <h1 >Welcome to Conclave!</h1>
</div>

<div class="welcome_options">

    <div class="welcome_btns" @click="$emit('closemodal')"><router-link to="/login">Log In</router-link></div>

    <p>or</p>
 
    <div class="welcome_btns" @click="$emit('closemodal')" ><router-link to="/signup">Sign Up</router-link></div>

</div>
</div>

</template>

<style scoped>

.welcome_page {
    position: fixed;
    text-align: center;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: #111127 ;
    z-index: 10;
    padding-top: 100px;
}

.logo {
    color: #63B798;
    font-family: 'Inter';
    width: 40%;
    margin: 80px 30% 40px 30% ;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.logo img{
    width: 100%; 
}

.welcome_div {
    width: 60%;
    margin: auto;
    text-align: center;
    font-family: 'Inter';
}

.welcome_options {
    width: 60%;
    margin: 40px 20% 40px 20%;
    display: flex;
    font-family: 'Inter';
    justify-content: space-around;
}

.welcome_options p {
    padding: 10px;
}

.welcome_btns {
    background-color: #63B798;
    padding: 10px;
    border-radius: 30px;
   
}
.welcome_btns router-link:active{
    color: white;
    text-decoration: none; 
}

p{
    font-weight: 800;
}

</style>