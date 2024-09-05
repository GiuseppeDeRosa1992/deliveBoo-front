<script>

export default {
  name: 'AppHeader',
}

</script>

<template>

  <header class="container-fluid d-flex  shadow py-2 mx-0 justify-content-center">
    <div class="row cont-header align-items-center">

      <div class="logo col-3 col-lg-1 col-md-2">
        <img src="/public/logo-deliveboo-no-scritta.png" alt="">
      </div>

      <div class="navbar col-5 col-lg-9 col-md-7 d-none d-sm-block ps-3">
        <router-link class="navbar-link fs-4" to="/restaurant">Ristoranti</router-link>
      </div>

      <!-- Navbar mobile visibile su schermi piccoli -->
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
              <router-link class="navbar-link fs-4" to="/restaurant">Ristoranti</router-link>
            </div>
            <div class="border-bottom py-4">
              <h5 class="text-white fs-3">Profilo</h5>
              <router-link class="navbar-link fs-5" to="/login">Login</router-link>
              <div class="">
                <router-link class="navbar-link fs-5" to="/register">Registrati</router-link>
              </div>
            </div>
            <div class="py-4">
              <h6 class="text-white fs-3">Note legali</h6>
              <a class="navbar-link fs-6" to="/login">Termini & Condizioni</a>
              <div class="">
                <a class="navbar-link fs-6" to="/register">Informativa sulla privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="register col-3 col-lg-2 col-md-2 d-none d-sm-block ">
        <div class="d-flex align-items-center gap-3 justify-content-end">
          <router-link class="navbar-link fs-5" to="/login">Login</router-link>
          <router-link class="fs-5 button btn shadow bg-white rounded-pill border-0 py-1 px-3"
            to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>
header {
  height: 8vh;
  background-color: #E67E22;
}

.cont-header {
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
}
</style>