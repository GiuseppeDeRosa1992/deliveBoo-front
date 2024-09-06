<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  name: 'AppMenu',

  data() {
    return {

      dishes: [], // Array per salvare i piatti recuperati dall'API
      base_url: 'http://127.0.0.1:8000', // URL base per l'API
    };
  },

  mounted() {
    this.getDishes(); // Recupera i piatti quando il componente è montato
  },

  methods: {
    getDishes() {
      // Effettua una chiamata GET all'API per ottenere i piatti del ristorante
      axios.get(`${this.base_url}/api/restaurants/${this.restaurantId}/dishes`)
        .then(response => {
          this.dishes = response.data; // Salva i piatti nel data
        })
        .catch(error => {
          console.error("Errore durante il recupero dei piatti:", error);
        });
    }
  },

  computed: {
    restaurantSlug() {
      return this.$route.params.restaurant_slug;
    }
  }
};
</script>

<template>
  <div class="text-center cont-main">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Lista dei piatti -->
        <div class="row justify-content-center">
          <template v-if="dishes.length > 0">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="dish in dishes" :key="dish.id">
              <div class="card h-100">
                <template v-if="!dish.image.startsWith('http')">
                  <img class="card-img-top" :src="base_url + '/storage/' + dish.image" alt="">
                </template>
                <template v-else>
                  <img class="card-img-top" :src="dish.image" alt="">
                </template>
                <div class="card-body">
                  <h5 class="card-title">{{ dish.name }}</h5>
                  <p class="card-text">€{{ dish.price }}</p>
                </div>
              </div>
            </div>
          </template>
          <div v-if="dishes.length === 0" class="pb-3">
            <p class="my-3 fs-5">Nessun piatto disponibile per questo ristorante.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin {
  margin-top: 20rem;
}
</style>