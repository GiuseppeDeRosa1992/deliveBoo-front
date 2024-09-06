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
    restaurantSlug() {
      return this.$route.params.restaurant_slug;
    }
  }
};

</script>

<template>
    <div class="margin">
        <h1>Menu del Ristorante</h1>
        <p>ID del ristorante: {{ restaurantSlug}}</p>
    </div>
</template>

<style scoped>
.margin{
    margin-top: 20rem;
}

</style>