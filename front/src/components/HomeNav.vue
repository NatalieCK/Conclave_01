<template>

<div class="header_flex_home">
<img class="home_logo" src="../assets/LOGO(1).png" alt="Conclave Logo">
<div class="home_center_container">
<h3 class="home_ConferenceRMtitle">Conference Rooms</h3>
</div>

<!-- <div class="home_nav_container">
<img src="../assets/LOGO(1).png" alt="logo" class="nav_logo">
<div class="header">armageddon</div> -->
<img src="../assets/nav.svg" alt="" class="svg_nav" @click="nav_drop">

    <div class="component_dropdown" id="dropdown_01">
        <div class="dropdown_container">
            <div class="dropdown_text_container" id="go_home">
                <div class="dropdown_text">home</div>
            </div>
            <div class="dropdown_text_container" id="display_mode">
                <div class="dropdown_text">display mode</div>
            </div>
            <div class="dropdown_text_container" id="log_out">
                <div class="dropdown_text">log out</div>
            </div>
            <div class="dropdown_text_container" id="update_details">
            <div class="dropdown_text">update details</div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.header_flex_home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0px 10px;
}

.home_logo {
    color: #63B798;
    width: 15%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.home_logo img{
    width: 100%; 
}
.home_center_container {
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


.svg_nav {
    /* margin-top: 25px; */
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: 0px 10px;
}


.component_dropdown {
  width: 100%;
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 90px;
  z-index: 10;

}

.dropdown_container {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: solid 1px white;
    z-index: 10;
    opacity: 1;
}
.dropdown_text_container{
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
    background-color: #63B798;
    padding: 25px;
}
          
.dropdown_text {
    font-family: 'Inter';
    color: white;
    font-size: 18px;
    font-weight: lighter;
}
</style>

<script>

export default {
  data() {
  return {
    count: 1,
    name: 'x'
  }
},
    methods: {
    nav_drop() {
        let _07 = document.getElementById('dropdown_01');
                if (_07.style.display === "none") {
                _07.style.display = "flex";
                              } 
                else {
                  _07.style.display = "none";
                             }

  }


}
}

</script>