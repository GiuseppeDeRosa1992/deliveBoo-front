<script>
import axios from 'axios';

export default {
  name: 'AppMain',

  data() {
    return {
      restaurants: [], // Ristoranti recuperati dall'API
      types: ['Pizzeria', 'Sushi', 'Messicano', 'Cinese', 'Italiano', 'Indiano', 'Vegano','Internazionale','SteakHouse','Fast Food','Bar e Caffetteria','Fusion','Gourmet','Pasticceria'],
      filtraRistorante: '', // Tipo di ristorante selezionato per il filtro
      ricercaRistorante: '', // Testo di ricerca per filtrare i ristoranti
      error: null,
      base_url: 'http://127.0.0.1:8000', // URL base per l'API
    };
  },
  mounted() {
    this.chiamataRestaurant();
  },

  methods: {
    // Metodo per recuperare i ristoranti dall'API
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
  },

  computed: {
    // Filtra i ristoranti in base alla ricerca e al tipo selezionato
    filteredRestaurants() {
      return this.restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(this.ricercaRistorante.toLowerCase());

        // Se un tipo è selezionato, controlla se il ristorante appartiene a quel tipo
        const matchesType = this.filtraRistorante === '' || 
          restaurant.type.some(t => t.name === this.filtraRistorante);

        return matchesSearch && matchesType;
      });
    }
  }
};
</script>


<template>
  <div class="text-center">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6">
          <img class="logo my-3" src="../assets/logo-deliveboo.png" alt="">
          <h1 class="mb-3">Benvenuto su Deliveboo</h1>
          <h3 class="mb-4">Il sapore che ti raggiunge</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <input type="text" class="form-control" v-model="ricercaRistorante"
            placeholder="Ricerca un ristorante specifico">
        </div>

        <!-- Seleziona la categoria del ristorante -->
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <select v-model="filtraRistorante" class="form-select">
            <option value="">Tutte le categorie</option>
            <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>

      <!-- Lista dei ristoranti filtrati -->
      <div class="row justify-content-center">
        <template v-if="filteredRestaurants.length > 0">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="restaurant in filteredRestaurants"
            :key="restaurant.id">
            <div class="card h-100">
              <template v-if="!restaurant.image.startsWith('http')">
                <img class="card-img-top" :src="base_url + '/storage/' + restaurant.image" alt="">
              </template>
              <template v-else>
                <img class="card-img-top" :src="restaurant.image" alt="">
              </template>
              <div class="card-body">
                <h5 class="card-title">{{ restaurant.name }}</h5>
                <p class="card-text"><i class="fas fa-map-marker-alt"></i> {{ restaurant.address }}</p>
              </div>
            </div>
          </div>
        </template>
        <p v-if="filteredRestaurants.length === 0" class="my-3">Nessun ristorante trovato</p>
      </div>

      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  max-width: 250px;
  height: auto;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
  color: #333;
}

.card-text {
  color: #777;
}

@media (max-width: 768px) {
  .card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 576px) {

  .filter-section,
  #ricercaRistorante {
    width: 100%;
  }
}
</style>
