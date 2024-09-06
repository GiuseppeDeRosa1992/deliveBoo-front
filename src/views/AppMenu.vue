<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  name: 'AppMenu',

  data() {
    return {
      restaurants: [], // Ristoranti recuperati dall'API
      base_url: 'http://127.0.0.1:8000', // URL base per l'API
    };
  },
  mounted() {
  },

  methods: {
  },

  computed: {
    restaurantId() {
      return this.$route.params.restaurant_id;
    }
  }
};

</script>

<template>
    <div class="margin">
        <h1>Menu del Ristorante</h1>
        <p>ID del ristorante: {{ restaurantId }}</p>
    </div>
</template>

<style scoped>
.margin{
    margin-top: 20rem;
}

</style>