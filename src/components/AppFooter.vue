<script>


export default {
  name: 'AppFooter',


}


</script>

<template>
  <footer class="  footer bg-dark text-white py-4">
    <div class="container-fluid">


      <div class="row text-center text-md-start">

        <div class="col-md-1">

        </div>


        <!-- Logo e descrizione -->
        <div class="col-md-2 mb-4">
          <img src="../assets/logo-deliveboo-no-scritta.png" alt="DeliveBoo Logo" class="img-fluid mb-2"
            style="max-width: 150px;">
          <p class="small">
            Il tuo cibo preferito, consegnato a casa tua. Facile e veloce.
          </p>
        </div>

        <!-- Link navigazione -->
        <div class=" quickLinks col-md-2 mb-4">
          <h5>Scopri DeliveBoo</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="">Chi siamo</a></li>
            <li><a href="#" class="">Ristoranti</a></li>
            <li><a href="#" class="">Investitori</a></li>
            <li><a href="#" class="">Lavora con noi</a></li>
            <li><a href="#" class="">Contatti</a></li>
            <li><a href="#" class=""></a>FAQ</li>
          </ul>
        </div>

        <div class=" quickLinks col-md-2 mb-4">
          <h5>Note Legali</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="">Termini & Condizioni</a></li>
            <li><a href="#" class="">Informativa sulla privacy</a></li>
            <li><a href="#" class="">Cookies</a></li>
            <li><a href="#" class="">Classificazione dei partner</a></li>
            <li><a href="#" class="">Richieste da parte delle Autorità Pubbliche</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class=" social col-md-1 mb-4">
          <h5>Follow Us</h5>
          <a href="#" class=" me-3">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" class=" me-3">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" class="me-3">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div class="col-md-1">

        </div>


        <!-- App -->
        <div class="col-md-2 mb-4 ">
          <h5>Download Our App</h5>
          <div class="d-flex flex-column">
            <a href="" class="btn mb-3 mt-1" style="background-color: #D35400; color: #FFFFFF;">
              Download for iOS
            </a>
            <a href="" class="btn" style="background-color: #D35400; color: #FFFFFF;">
              Download for Android
            </a>
          </div>
        </div>

        <div class="col-md-1">

        </div>


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
.social a i {
  color: #ffffff;
  /* Imposta il colore delle icone su bianco */
}

.social a:hover i {
  color: #cccccc;
  /* Colore leggermente più scuro al passaggio del mouse (opzionale) */
}

.quickLinks a {
  color: #ffffff;
  /* Colore bianco per i link */
  text-decoration: none;
  /* Rimuovi la sottolineatura (opzionale) */
}

.quickLinks a:hover {
  color: #cccccc;
  /* Colore leggermente più scuro al passaggio del mouse (opzionale) */
  text-decoration: underline;
  /* Aggiungi una sottolineatura al passaggio del mouse (opzionale) */
}
</style>
