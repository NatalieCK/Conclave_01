
<template>

<div class="header_flex">
<img class="logo" src="../assets/LOGO(1).png" alt="Conclave Logo">
<div class="center_container">
<h3 class="ConferenceRMtitle">Conference Rooms</h3>
</div>
<img class="about_button" src="../../ICONS/help_outline_white_24dp.svg" alt="Conclave About Button">
</div>
</template>

<style>

.header_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0px 10px;
}

/* .logo {
    margin-top: 20px;
    width: 50px;
    height: 50px;
} */
.logo {
    color: #63B798;
    width: 15%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.logo img{
    width: 100%; 
}

.center_container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 15px;
    background-color: #9369CE;
    width: 230px;
    height: 80px;
    border-bottom-left-radius: 33px;
    border-bottom-right-radius: 33px;
    font-family: 'inter';
    font-size: 16px;
    font-weight: 800;
}

.about_button{
    width: 50px;
    padding: 10px;
}

</style>

<script setup>



</script>