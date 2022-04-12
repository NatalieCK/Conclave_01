<template>
<div>
    <div class="home_nav_container">
        <div class="logo_container">
            <img src="../assets/LOGO(1).png" alt="logo" class="logo">
        </div>
        <div class="header_container">
            <div class="header">conference</div>
        </div>
        <div class="navbar_container">
            <img src="../assets/nav.svg" alt="" class="svg_nav" @click="nav_drop">
        </div>
    </div>


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

.home_nav_container {
    display: flex;
    justify-content: space-evenly;

}
.header_container {

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #63B798;
    width: 260px;
    height: 90px;
    border-bottom-left-radius: 33px;
    border-bottom-right-radius: 33px;
    font-family: 'inter';
    font-size: 28px;
}

.logo {
    margin-top: 20px;

    width: 50px;
    height: 50px;
}

.svg_nav {
    margin-top: 25px;

    width: 35px;
    height: 40px;
}

.component_dropdown {
  width: 100%;
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 90px;
}

.dropdown_container {
      width: 50%;
      display: flex;
      flex-direction: column;
      border: solid 1px white;
      z-index: 2;
      opacity: 1;



  }
.dropdown_text_container
      {
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
    count: 68,
    name: 'Vue.js'
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