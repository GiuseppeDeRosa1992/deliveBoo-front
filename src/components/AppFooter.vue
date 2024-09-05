<script>


export default {
  name: 'AppFooter',


}


</script>

<template>
  <footer class="footer bg-dark text-white py-4">
    <div class="container-fluid">
      <div class="row text-center text-md-start">
        <div class="col-md-1"></div>

        <!-- Logo e descrizione -->
        <div class="col-md-2 mb-4">
          <img src="../assets/logo-deliveboo-no-scritta.png" alt="DeliveBoo Logo" class="img-fluid mb-2 logo"
            style="max-width: 150px;">
          <p class="small">
            Il tuo cibo preferito, consegnato a casa tua. Facile e veloce.
          </p>
        </div>

        <!-- Link navigazione -->
        <div class="quickLinks col-md-2 mb-4 text-center">
          <h5>Scopri DeliveBoo</h5>
          <ul class="list-unstyled">
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Ristoranti</a></li>
            <li><a href="#">Investitori</a></li>
            <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Contatti</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div class="quickLinks col-md-2 mb-4 text-center">
          <h5>Note Legali</h5>
          <ul class="list-unstyled">
            <li><a href="#">Termini & Condizioni</a></li>
            <li><a href="#">Informativa sulla privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Classificazione dei partner</a></li>
            <li><a href="#">Richieste da parte delle Autorità Pubbliche</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="social col-md-2 mb-4 text-center">
          <h5>Follow Us</h5>
          <a href="#" class="me-3"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="me-3"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="me-3"><i class="fa-brands fa-instagram"></i></a>
        </div>

        <!-- App -->
        <div class="col-md-2 mb-4 text-center">
          <h5>Download Our App</h5>
          <div class="d-flex flex-column">
            <a href="#" class="btn mb-3 mt-1 btn-download" style="background-color: #D35400">Download for iOS</a>
            <a href="#" class="btn btn-download" style="background-color: #D35400">Download for Android</a>
          </div>
        </div>

        <div class="col-md-1"></div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-secondary py-2 mt-4">
      <div class="container-fluid text-center">
        <p class="mb-0 text-muted">&copy; 2024 DeliveBoo. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
/* Effetto hover sul logo */
.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-5px);
}

/* Pulsanti con effetto ingrandimento */
.btn-download {
  transition: transform 0.3s ease;
}

.btn-download:hover {
  transform: scale(1.1);
}

.social a i {
  color: #ffffff;
}

.social a:hover i {
  color: #e67e22;
}

.quickLinks a {
  color: #ffffff;
  text-decoration: none;
}

.quickLinks a:hover {
  color: #e67e22;
  text-decoration: underline;
}
</style>
