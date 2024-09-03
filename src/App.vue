<script >
import axios from 'axios';

export default{
  name : 'App',

  data(){
    return {
      restaurants:[],
      error: null,
      ricercaRistorante:'',
    }
  },
 mounted(){
    this.chiamataRestaurant();
  
},

  methods:{
    chiamataRestaurant() {
      axios.get('http://127.0.0.1:8000/api/restaurant')
        .then(result => {
          this.restaurants = result.data;
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati:', error);
          this.error = 'Errore nel caricamento dei ristoranti'; 
        });
    }
  },

  computed: {
    filteredRestaurants() {
      return this.restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(this.ricercaRistorante.toLowerCase());
      });
    }
  }
}

 
</script>

<template>
  <div>
    <h1>Ristoranti</h1>

    <input type="text" v-model="ricercaRistorante" placeholder="Cerca un ristorante..." />

    <p v-if="filteredRestaurants.length === 0">Nessun ristorante trovato</p>

    <ul v-if="filteredRestaurants.length > 0">
      <li v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        {{ restaurant.name }}
      </li>
    </ul>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>

</style>
