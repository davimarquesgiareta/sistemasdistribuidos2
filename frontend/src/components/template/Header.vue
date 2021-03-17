<template>
  
  <header class="header">
      <div class="container-fluid" align="center">
          <h2 id="titulopagina">The Best Guitars of the World</h2>
      </div>
      
      </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>

    #titulopagina{
        color: white;
    }
    .header {
        grid-area: header;
        background:linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items:center;
    }
</style>