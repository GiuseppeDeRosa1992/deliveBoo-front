<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      dishes: [], // Piatti del ristorante
      error: null
    };
  },
  mounted() {
    this.getDishes();
  },
  methods: {
    getDishes() {
      const restaurantSlug = this.$route.params.restaurant_slug;

      axios.get(`http://127.0.0.1:8000/api/restaurants/${restaurantSlug}/dishes`)
        .then(response => {
          this.dishes = response.data.dishes;
        })
        .catch(error => {
          this.error = 'Errore nel caricamento dei piatti';
          console.error(error);
        });
    }
  }
}
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
/* Stili per rendere più gradevole il layout */
.container {
  margin-top: 3rem;
}

.dish-card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dish-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.dish-image {
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  font-size: 1.3rem;
  color: #2c3e50;
}

.card-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
}

.card-description {
  font-size: 0.95rem;
  color: #7f8c8d;
}

.btn-primary {
  background-color: #e67e22;
  border-color: #e67e22;
  width: 100%;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #d35400;
  border-color: #d35400;
}

.pb-3 {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .dish-image {
    height: 150px;
  }
}
</style>