<template>
    <div>

    <form class="inputs" action="#" method="GET"  id="">
        
        <fieldset class="fieldset">

        <label for=""></label>
        <input type="text" name="WritePost" placeholder="Write a post" class="input" required>

            <div class="svg_xp">
            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"/></svg>
            </div>


      </fieldset>

      </form>

</div>
</template>
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
.fieldset {
    border: solid white 1px;
    border-right: none;
    border-left: none;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
          z-index: -1;

}

.input {
    border: solid 1px white;
    width: 322px;
    height: 34px;
    border-radius: 22.5px;
    background-color: transparent;


}
::placeholder { 
  color: white;
  opacity: 1; 
    font-family: 'inter';
text-align: center;

}

.svg_xp {
    padding-left: 5px;
}
</style>