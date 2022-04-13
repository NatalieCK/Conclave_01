<script setup>
</script>
<template>

<div class="container">
<div class="About_Conclave_Title">
    <h1>About Conclave</h1>
</div>
<div class="about_text">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni pariatur non suscipit debitis repellat aspernatur placeat veniam dolore adipisci ipsam dolor maiores cumque veritatis, inventore voluptatem totam. Quibusdam nisi fuga autem assumenda ullam dolor, voluptatum dignissimos fugiat deserunt quas sunt velit. Laborum pariatur sed doloremque optio quaerat accusantium porro, ad ipsa vitae exercitationem aspernatur ipsam incidunt magni rem totam voluptates. Eius porro quo similique eveniet, minima possimus, facere eligendi in exercitationem error inventore iste, totam ducimus. Laborum, corrupti placeat. Nesciunt quo, autem ipsam ipsum minus impedit? Ad eius quibusdam neque. Perferendis, nobis. </p>
</div>
<img class="close_button" @click="$emit('closeabout')" src="../../ICONS/close_white_24dp.svg" alt="close">
</div>
</template>
<style>

.container{
    text-align: center;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #111127;
    z-index: 10;
    padding-top: 175px;
    display: flex;
    flex-direction: column;
}
.about_logo{
    width: 50px;
    padding: 30px;
    margin: 0px 0px 0px 25px;
    position: absolute;
}

.About_Conclave_Title{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0px 30px;
    
}

.About_Conclave_Title h1{
    padding: 0px 10px;
    font-weight: 600;
    font-size: 24px;
}
.about_text{
    margin: 0px 30px;
    padding: 10px;
    text-align: left;
}
.close_button{
    width: 50px;
    position: absolute;
    top: 50px;
    right: 50px;
}
</style>