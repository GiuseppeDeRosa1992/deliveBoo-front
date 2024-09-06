<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppHeader',
}

</script>

<template>

  <header class="container-fluid d-flex  shadow py-2 mx-0 justify-content-center">
    <!-- <div class="row cont-header align-items-center">

      <div class="logo col-3 col-lg-1 col-md-2">
        <a class="navbar-link fs-4" to="/"><img src="/public/logo-deliveboo-no-scritta.png" alt=""></a>
      </div>

      <div class="navbar col-5 col-lg-9 col-md-7 d-none d-sm-block ps-3">
        <a class="navbar-link fs-4" to="/">Home</a>
      </div>

   
      <div class="navbar-mobile col-9 d-block d-sm-none d-flex justify-content-end">
        <a class="text-white fs-3 pe-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
          aria-controls="offcanvasExample">
          <i class="fa-solid fa-bars"></i>
        </a>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header header-hamb-menu">
            <h5 class="offcanvas-title text-white fs-3" id="offcanvasExampleLabel">Menù</h5>
            <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body body-hamb-menu">
            <div class="border-bottom pb-4 pt-2">

            </div>
            <div class="border-bottom py-4">
              <h5 class="text-white fs-3">Profilo</h5>
              <a class="navbar-link fs-5" href="http://127.0.0.1:8000/login">Login</a>
              <div class="">
                <a class="navbar-link fs-5" href="http://127.0.0.1:8000/register">Registrati</a>
              </div>
            </div>
            <div class="py-4">
              <h6 class="text-white fs-3">Note legali</h6>
              <a class="navbar-link fs-6">Termini & Condizioni</a>
              <div class="">
                <a class="navbar-link fs-6">Informativa sulla privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="register col-3 col-lg-2 col-md-2 d-none d-sm-block ">
        <div class="d-flex align-items-center gap-3 justify-content-end">
          
        </div>
      </div>
    </div> -->
    <div class="row cont-logo1">
      <div class="col-12 cont-logo2">
      <router-link class="navbar-link fs-4 logo" to="/"><img src="/public/logo-deliveboo-no-scritta.png"
          alt=""></router-link>
        </div>
    </div>
  </header>

</template>

<style scoped>
header {
  height: 5rem;
  background-color: #E67E22;
  position: fixed;
  margin-top: -5rem;
  z-index: 2;
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