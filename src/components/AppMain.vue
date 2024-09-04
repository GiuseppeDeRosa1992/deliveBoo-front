<script >
import axios from 'axios';

export default{
  name : 'AppMain',

  data(){
    return {
      restaurants:[],
      error: null,
      ricercaRistorante:'',
      base_url: 'http://127.0.0.1:8000',
    }
  },
 mounted(){
    this.chiamataRestaurant();
  
},

  methods:{
    chiamataRestaurant() {
      axios.get(`${this.base_url}/api/restaurant`)
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

    <input class="search" type="text" v-model="ricercaRistorante" placeholder="Cerca un ristorante..." />

    <p v-if="filteredRestaurants.length === 0">Nessun ristorante trovato</p>

    <!-- <ul v-if="filteredRestaurants.length > 0">
      <li v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        {{ restaurant.name }}
        {{ restaurant.image }}
        {{ restaurant.p_iva }}
        {{ restaurant.address }}
      </li>
    </ul> -->
    <div class="cont-flex">
    <template v-if="filteredRestaurants.length > 0">
      <div class="card" v-for="restaurant in filteredRestaurants">
        <template v-if="!restaurant.image.startsWith('http')">
          <img class="card-img-top" :src="base_url + '/storage/' + restaurant.image" alt="">
        </template>
        <template v-else>
          <img class="card-img-top" :src="restaurant.image" alt="">
        </template>
        <h2 class="title-card">{{ restaurant.name }}</h2>
        <!-- <p>{{ restaurant.image }}</p> -->
        <p class="info-card">P. IVA: {{ restaurant.p_iva }}</p>
        <p class="info-card">Indirizzo: {{ restaurant.address }}</p>
      </div>
    </template>

  </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.cont-flex {
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  gap: 20px;
}

.search {
  margin: 20px 0 50px 0;
  width: 250px;
}

.info-card {
  margin: 10px 0 0 0;
}
</style>


