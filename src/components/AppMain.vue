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
    },
    filtroType(typeId){
      this.tipoSelezionato = typeId;
      if(typeId== null){
        this.filtroType=this.restaurants
      }else{
        this.filtroType = this.restaurants.filter(restaurant=>restaurant.type.includes(typeId))
      }
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

    <div class="filter-section">
        <button 
            v-for="type in types"  
            @click="filtroType(type.name)">
            tipo        
        </button>
      </div>

    <p v-if="filteredRestaurants.length === 0">Nessun ristorante trovato</p>
    <div class="container flex row">
    <template v-if="filteredRestaurants.length > 0">
      <div class="card col-2 p-2 m-3" v-for="restaurant in filteredRestaurants">
        <template v-if="!restaurant.image.startsWith('http')">
          <img class="card-img-top" :src="base_url + '/storage/' + restaurant.image" alt="">
        </template>
        <template v-else>
          <img class="card-img-top" :src="restaurant.image" alt="">
        </template>
        <h2 class="title-card">{{ restaurant.name }}</h2>
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


