<template>
    <div>

    <form class="inputs" action="#" method="GET"  id="">
        
        <fieldset class="fieldset">

        <label for=""></label>
        <input type="text" name="WritePost" placeholder="Write a post" class="input" required>

      </fieldset>

      </form>

</div>
</template>
<style scoped>
.fieldset {
    border: solid white 1px;
    border-right: none;
    border-left: none;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.input {
    border: solid 1px white;
    width: 322px;
    height: 34px;
    border-radius: 22.5px;
    background-color: transparent;
    opacity: 1;

}
::placeholder { 
  color: white;
  opacity: 1; 
    font-family: 'inter';
text-align: center;

}

</style>