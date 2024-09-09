<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppHeader',
}

</script>

<template>
  <header class="container-fluid d-flex shadow py-2 mx-0">
    <div class="row cont-logo1 w-100 justify-content-between align-items-center">
      <div class="col-6 cont-logo2 d-flex align-items-center">
        <!-- Logo -->
        <router-link class="navbar-link fs-4 logo" to="/">
          <img src="/public/logo-deliveboo-no-scritta.png" alt="">
        </router-link>

        <!-- Link Home -->
        <router-link class="navbar-link fs-4 text-white text-decoration-none ms-3" to="/">Home</router-link>
      </div>

      <!-- Carrello posizionato a destra -->
      <div class="col-6 d-flex justify-content-end align-items-center">
        <router-link to="/cart" class="cart-link text-white text-decoration-none position-relative me-3">
          <i class="fa-solid fa-cart-shopping fa-xl"></i> <!-- Icona carrello -->
          <span class="ms-2">Carrello</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 5rem;
  background-color: #E67E22;

}

.cont-logo1 {
  height: 100%;
}

.cont-logo2 {
  height: 100%;
}

.logo {
  height: 100%;
}

.logo img {
  height: 100%;
}

/* .cont-header {
  height: 100%;
  width: 1200px;
}

.logo {
  height: 100%;
}

.logo img {
  height: 100%;
}

.button:hover {
  color: #E67E22;
}

.navbar-link {
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.navbar-link:hover {
  color: #2C3E50;
}

.header-hamb-menu {
  background-color: #2C3E50;
}

.body-hamb-menu {
  background-color: #E67E22;
} */
</style>