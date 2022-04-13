<script setup>
</script>
<template>
<div class="container">
<div class="About_Conclave_Title">
    <img src="../../LOGO(1).png" alt="Conclave Logo">
    <h1>About Conclave</h1>
</div>
<div class="about_text">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni pariatur non suscipit debitis repellat aspernatur placeat veniam dolore adipisci ipsam dolor maiores cumque veritatis, inventore voluptatem totam. Quibusdam nisi fuga autem assumenda ullam dolor, voluptatum dignissimos fugiat deserunt quas sunt velit. Laborum pariatur sed doloremque optio quaerat accusantium porro, ad ipsa vitae exercitationem aspernatur ipsam incidunt magni rem totam voluptates. Eius porro quo similique eveniet, minima possimus, facere eligendi in exercitationem error inventore iste, totam ducimus. Laborum, corrupti placeat. Nesciunt quo, autem ipsam ipsum minus impedit? Ad eius quibusdam neque. Perferendis, nobis. Obcaecati quos eligendi, accusantium quasi itaque quia temporibus dolorum impedit ad aspernatur iusto provident, aperiam numquam, blanditiis facilis rem veritatis eaque dignissimos explicabo ipsam fugiat vero. Aperiam cum eos possimus magnam, ratione tempore, obcaecati voluptates animi deserunt modi, at natus fugiat. Laudantium reprehenderit eos at dolorum, illum dolor iure, ad quas totam excepturi, nisi rem repellendus alias aperiam! Dolore explicabo necessitatibus repudiandae assumenda beatae eveniet libero, asperiores incidunt. Et ipsam unde, itaque vel modi totam nisi temporibus consectetur aperiam cum eaque magni consequuntur? Asperiores architecto praesentium aliquam! Nisi, porro ipsa libero debitis fugit placeat animi, doloremque quam eaque, quod modi! Blanditiis eaque adipisci consectetur. Reiciendis, nulla eius.</p>
</div>

<img @click="$emit('closeabout')" src="../../ICONS/close_white_24dp.svg" alt="close">
</div>


</template>
<style>

.container{
    text-align: center;
    position: fixed;
    top: 0;
    height: 100vw;
    width: 100vh;
    background-color: #111127;
    z-index: 10;
    padding-top: 100px;
}
.About_Conclave_Title{
    display: flex;
    justify-content: space-between;
}
.about_text{
    padding: 10px;
}
</style>