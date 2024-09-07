<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      dishes: [], // Piatti del ristorante
      error: null,
      cart: JSON.parse(localStorage.getItem('cart')) || [] //Serve per mantenere il carrello in maniera persistente
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
    },
    addToCart(dish) {
      this.cart.push(dish);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } //Funzione che gestisce l'aggiunta al carrello
  }
}
</script>

<template>
  <div class="cont-main">
    <div class="container">
      <div class="row justify-content-between mt-5">
        <!-- Lista dei piatti -->
        <div class="col-12 col-md-8 mb-4">
          <div class="row justify-content-center">
            <template v-if="dishes.length > 0">
              <div class="col-12 col-sm-6 col-md-4 mb-3" v-for="dish in dishes" :key="dish.id">
                <div class="card dish-card">
                  <template v-if="!dish.image.startsWith('http')">
                    <img class="card-img-top dish-image" :src="base_url + '/storage/' + dish.image" alt="">
                  </template>
                  <template v-else>
                    <img class="card-img-top dish-image" :src="dish.image" alt="">
                  </template>
                  <div class="card-body">
                    <h5 class="card-title">{{ dish.name }}</h5>
                    <p class="card-text">€{{ dish.price }}</p>
                    <p class="card-description">{{ dish.description }}</p>
                    <button class="btn btn-primary" @click="addToCart(dish)">Aggiungi al Carrello</button>
                  </div>
                </div>
              </div>
            </template>
            <div v-if="dishes.length === 0" class="text-center mt-5">
              <p class="fs-4">Nessun piatto disponibile per questo ristorante.</p>
            </div>
          </div>
        </div>

        <!-- Card del carrello -->
        <div class="col-12 col-md-4">
          <div class="card cart-card">
            <div class="card-body">
              <h5 class="card-title">Carrello</h5>
              <p class="card-text">Aggiungi piatti al carrello per visualizzare qui.</p>
              <div class="cart-items">
                <ul>
                  <li v-for="dish in cart" :key="dish.id">
                    {{ dish.name }} - €{{ dish.price }}
                  </li>
                </ul>
              </div>
              <button class="btn btn-success">Procedi al ordine</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Spazio extra tra l'header e il contenuto */
.cont-main {}

.container {
  max-width: 1200px;
}

.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dish-card {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 300px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}


.dish-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 24px rgba(255, 87, 34, 0.5);
}

.dish-image {
  height: 100px;
  object-fit: cover;
}

.card-body {
  padding: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.card-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.btn-primary {
  background-color: #e67e22;
  border-color: #e67e22;
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  background-color: #d35400;
  border-color: #d35400;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cart-card {
  border: 2px solid #e67e22;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.cart-items {
  margin-bottom: 1rem;
}

.btn-success {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
}

.text-center {
  text-align: center;
}
</style>