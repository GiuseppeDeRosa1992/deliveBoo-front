<script>

export default{
  name : 'AppHeader', 
}

</script>

<template>

  <header class="container-fluid d-flex align-items-center shadow  mb-4 py-2 mx-0">

    <div class="logo col-lg-1 d-flex">
      <img src="/public/logo-deliveboo-no-scritta.png" alt="">
      
    </div>
    
    <div class="navbar col-lg-9">
    <router-link class="navbar-link fs-4" to="/restaurant">Ristoranti</router-link>
    </div>
    
    <div class="register col-lg-2 d-flex gap-3 align-items-center">
      <router-link class="navbar-link fs-5" to="/login">Login</router-link>
      <router-link class="fs-5 button btn shadow bg-white rounded-pill border-0 py-1 px-3" to="/register">Register</router-link>
    
    </div>
    
    </header>
    
</template>

<style scoped>

header {
  height: 8vh;
  background-color: #E67E22;
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
}

.navbar-link:hover {
  color: #2C3E50;
}
</style>