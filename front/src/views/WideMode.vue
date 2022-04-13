<script setup>
import U_Avatar from '../components/U_Avatar.vue';
import C_Avatar from '../components/C_Avatar.vue';



</script>

<template>
<body>

    <div class="header_container">
        <div class="title_container">
            <div class="conference_container">
            conference
            </div>
            <div class="wide_mode_container">
                wide mode
            </div>
            
        </div>
        <div class="x_container">
            x
        </div>
    </div>

    <div class="content_container">
        <div class="name_container_01">
            <div class="name_container_02">
                <div class="name_container_03">
                    <U_Avatar />
                    <div class="name">Tom Williamson</div>
                </div>
                <div class="name_container_04"></div>
            </div>
        </div>


        <div class="main_post_container">
            <div class="main_post">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facilis id incidunt totam! Atque voluptate, perspiciatis sapiente odit unde tempora ullam et animi repellat provident beatae reiciendis dolore deserunt molestiae rem laudantium fugit dolorem repellendus assumenda inventore amet? Eos eum dignissimos, saepe optio nisi hic aut fugiat veritatis consequuntur esse!</div>
        </div>

        <div class="reply_wm_container">

            <div class="reply_wm_33">
                <div class="reply_wm_100">
                    <div class="reply_wm_name">
                        <C_Avatar />
                        <p>Joe Davies</p>
                    </div>
                    <div class="reply_wm_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia quidem cum voluptatibus dolorum. Veniam.</div>

                </div>
            </div>

            <div class="reply_wm_33">
                <div class="reply_wm_100">
                    <div class="reply_wm_name">
                        <C_Avatar />
                        <p>Joe Davies</p>
                    </div>
                    <div class="reply_wm_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia quidem cum voluptatibus dolorum. Veniam.</div>

                </div>
            </div>
        
            <div class="reply_wm_33">
                <div class="reply_wm_100">
                    <div class="reply_wm_name">
                        <C_Avatar />
                        <p>Joe Davies</p>
                    </div>
                    <div class="reply_wm_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia quidem cum voluptatibus dolorum. Veniam.</div>

                </div>
            </div>

        </div>


    </div>

</body>

</template>
#111127
/* DARK BLUE */ 
#63B798
/* GREEN */ 
#9369CE
/* PURPLE */ 
<style>
* {
    font-family: 'Inter';
    font-weight: lighter;
}
body {
    display: flex;
    flex-direction: column;
}

.header_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 4rem;
    padding-left: 4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #63B798;
    margin-bottom: 10px;
    
}

.conference_container {
    font-family: 'Inter';
    font-size: 2rem;
}
.wide_mode_container {
    font-family: 'Inter';
    font-size: 1.5rem;
    color: #8953d5;
    font-weight: 300;

}
.x_container {


    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: 'Inter';
        font-weight: 500;

        border-radius: 100%;

        color: white;
    }

.content_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.name_container_01 {
    width: 80vw;
}
.name_container_02 {
    width: 100%;
}

.name_container_03 {
    width: 66.66%;
    display: flex;
    flex-direction: row;
    align-items: center;

 
    font-family: 'Inter';

}
.name {

    padding: 5px;
    font-size: 1.5rem;
    background-color: rgba(128, 128, 128, 0.84);
    border-radius: 8px;
}
.name_container_04 {
    width: 33.33%;
}

.main_post_container {
    width: 80vw;
    text-align: justify;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.254);
}

.reply_wm_container {
    width: 80vw;
    display: flex;
    flex-direction: row;
}


.reply_wm_100 {
    width: 100%;
}

.reply_wm_name {

    display: flex;
    flex-direction: row;
    align-items: center;
}

.reply_wm_name p {
background-color: rgba(128, 128, 128, 0.84);
padding: 5px;
border-radius: 5px;

}

.reply_wm_content {
    border-right: solid 1px rgba(255, 255, 255, 0.44);
        background-color: rgba(128, 128, 128, 0.254);
        padding: 5px;
}
</style>

// .avatar_container {
//     height: 50px;
//     width: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 100%;
//     margin: 0;
//     background-color: #8FE2E2;
// }

// .avatar_inner {
//     font-family:'Inter', sans-serif;
//     color: white;
//     font-weight: 600;
//     font-size: 32px;
// }