<template>
    <div class="content"> 
      <div class="container-fluid">
          <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brands</th>
      <th scope="col">Type</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="guitar in guitars" :key="guitar.id">
      <th scope="row">{{guitar.id}}</th>
      <td>{{guitar.brands}}</td>
      <td>{{guitar.type}}</td>
      <td>R$ {{guitar.price}}</td>
    </tr>
    
  </tbody>
</table>

      </div>
    </div>
     
</template>

<script>

const axios = require('axios')

export default {
    name: "Content",
    data(){
        return {
             guitars:[]
        }
    },

    mounted(){
        this.getGuitars()
    },

    methods: {
       async getGuitars(){
            const response = await axios.get('http://localhost:3000/guitars')
        
        if (response.status == 200){
            this.guitars = response.data;
        }else {
            console.error("erro")
        }
        }
    }
}


</script>

<style>
   .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
        
    }
</style>