<script setup>
// import Something from '../components'

</script>

<template>

<p>(welcome page)</p>

<div class="logo">
<h2>x</h2>
<h2>conclave logo</h2></div>

<div class="welcome_div">
    <h1 >Welcome to Conclave!</h1>
</div>

<div class="welcome_options">

    <div class="welcome_btns"><router-link to="/Login.vue">Log In</router-link></div>

    <p>or</p>
 
    <div class="welcome_btns"><router-link to="/SignUp.vue">Sign Up</router-link></div>

</div>


</template>

<style scoped>


.logo {
    color: #63B798;
    font-family: 'Inter';
    width: 60%;
    margin: 80px 20% 40px 20% ;
    text-align: center;
}
.welcome_div {
    width: 60%;
    margin: auto;
    text-align: center;
    font-family: 'Inter';
}

.welcome_options {
    width: 60%;
    margin: 40px auto;
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

</style>