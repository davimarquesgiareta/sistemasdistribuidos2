<template>
<aside class="menu"></aside>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style>
 .menu{
     grid-area: menu;
     background: linear-gradient(to right, #56c2f8, #3ed8ffd8);

     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
 }
</style>