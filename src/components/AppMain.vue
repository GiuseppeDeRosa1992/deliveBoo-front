<script >
import axios from 'axios';

export default{
  name : 'AppMain',

  data(){
    return {
      restaurants:[],
      types:[],
      error: null,
      ricercaRistorante:'',
      base_url: 'http://127.0.0.1:8000',
      tipoSelezionato: null
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
    extractTypes() {
      const typesSet = new Set();
      this.restaurants.forEach(restaurant => {
        if (type.name) {
          typesSet.add(type.name);
        }
      });
      this.types = Array.from(typesSet);
    },
    filtroType(typeId) {
      if (typeId === "") {
        this.filtroType = this.restaurants;
      } else {
        this.filtroType = this.restaurants.filter(restaurant => restaurant.type === typeId);
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
  <div class=" text-center">
    <div class="container ">
      
      
      <div class="flex row justify-content-center align-items-center">
      <img class="logo my-3" src="../assets/logo-deliveboo.png" alt="">
      <h1 class="">Benvenuto su Deliveboo</h1>
      <h3>Il sapore che ti raggiunge</h3>
        
        <!-- Input per la ricerca del ristorante -->
        <div class="my-3 w-25">
          <input type="text" class="form-control" v-model="ricercaRistorante" id="ricercaRistorante" placeholder="Ricerca un ristorante specifico">
        </div>

        <!-- Select attuale per filtrare Categoria del Ristorante -->
        <div class="filter-section w-25">
            <select class="form-select" @change="filtroType($event.target.value)"> 
              <option selected>Scegli cosa vuoi mangiare</option>
              <option v-for="type in types" :key="type.name" :value="type.name"><{{type.name}}</option>
            </select>
        </div>
      </div>

      <p class="my-3" v-if="filteredRestaurants.length === 0">Nessun ristorante trovato</p>
    </div>
    
    <!-- Card Container con cards -->
    <div class="container">
      <div class="flex row ">
        <template v-if="filteredRestaurants.length > 0">
          <div class="card light-grey col-2 p-2 m-3" v-for="restaurant in filteredRestaurants">
          <template v-if="!restaurant.image.startsWith('http')">
            <img class="card-img-top" :src="base_url + '/storage/' + restaurant.image" alt="">
          </template>
          <template v-else>
            <img class="card-img-top" :src="restaurant.image" alt="">
          </template>
            <h2 class="title-card">{{ restaurant.name }}</h2>
            <p class="card-text">Indirizzo: {{ restaurant.address }}</p>
          </div>
        </template>
      </div>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.logo {
  width: 25%;
}
</style>


