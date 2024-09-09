<script>
  export default {
    name: 'AppThankYouPage',
    data() {
      return {
        userEmail: 'pincopallino@gmail.com', // Email dell'utente dinamica
      };
    },
  };
  </script>

<template>
    <div class="thank-you-page">
      <div class="container text-center">
        <h1 class="display-4">Grazie per il tuo ordine!</h1>
        <p class="lead">Il tuo ordine è stato ricevuto e sarà elaborato a breve.</p>
  
        <!-- Sezione per la conferma dell'invio email -->
        <div class="email-info mt-4">
          <i class="fas fa-envelope fa-3x mb-3"></i>
          <p class="lead">Ti verrà inviata una mail a questo indirizzo:</p>
          <h4 class="email-address">{{ userEmail }}</h4>
          <p>Con tutte le informazioni su come ricevere il tuo ordine.</p>
        </div>
  
        <!-- Numero Ordine -->
        <p class="order-number mt-4">Numero Ordine: <strong>#123456</strong></p>
  
        <!-- Riepilogo dell'ordine -->
        <div class="order-details mt-4">
          <h5 class="mb-3">Dettagli del tuo ordine</h5>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between">
              <span>Pizza Margherita</span> 
              <span>€8.50</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Sushi Mix</span> 
              <span>€12.00</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span class="fw-bold">Totale pagato</span> 
              <span class="fw-bold">€20.50</span>
            </li>
          </ul>
        </div>
  
        <!-- Tempi di consegna -->
        <p class="delivery-time mt-4">Il tuo ordine verrà consegnato entro <strong>30-45 minuti</strong>.</p>  
  
        <!-- Social Media -->
        <div class="social-media mt-4">
          <p>Seguici sui social per non perdere promozioni e novità!</p>
          <div class="social-icons">
            <a href="https://facebook.com" class="me-3"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://instagram.com" class="me-3"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
          </div>
        </div>
  
        <!-- Pulsante per tornare alla home -->
        <router-link to="/" class="btn btn-primary mt-4">Torna alla Home</router-link>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .thank-you-page {
    padding: 60px 0;
    text-align: center;
    background-color: #f8f9fa;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #E67E22;
    margin-bottom: 20px;
  }
  
  p {
    color: #6c757d;
  }
  
  .email-info {
    margin-top: 20px;
  }
  
  .email-address {
    font-weight: bold;
    color: #E67E22;
  }
  
  .order-number {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #333;
  }
  
  .delivery-time {
    font-size: 1.1rem;
    color: #555;
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
  }
  
  .social-icons a {
    color: #333;
  }
  
  .social-icons a:hover {
    color: #E67E22;
  }
  
  .btn {
    background-color: #E67E22;
    border-color: #E67E22;
    font-size: 1.2rem;
    padding: 10px 30px;
  }
  
  .btn-outline-primary {
    color: #007bff;
    border: 1px solid #007bff;
  }
  
  .btn-outline-primary:hover {
    background-color: #007bff;
    color: white;
  }
  
  .fa-envelope, .fa-facebook, .fa-instagram, .fa-twitter {
    margin: 5px;
  }
  
  </style>
  