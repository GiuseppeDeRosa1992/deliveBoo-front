<script >
import axios from 'axios';

export default{
  name : 'App',
  data(){
    return {
      restaurants:[],
    }
  },

  mounted(){
    axios.get('http://127.0.0.1:8000/api/restaurant')
    .then(result=>{
      this.restaurants=result.data;
    })
  }
  
}
</script>

<template>
  <h1>Ristoranti </h1>
  <ul>
      <li v-for="restaurant in restaurants">
        {{ restaurant.name }}
      </li>
    </ul>

</template>

<style scoped>

</style>
