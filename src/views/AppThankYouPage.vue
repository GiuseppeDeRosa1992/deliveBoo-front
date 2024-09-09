<template>
    <div class="thank-you-page">
      <div class="container text-center">
        <h1 class="display-4">Grazie per il tuo ordine!</h1>
        <p class="lead">Il tuo ordine è stato ricevuto e sarà elaborato a breve.</p>
        <router-link to="/" class="btn btn-primary mt-4">Torna alla Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppThankYouPage',
  };
  </script>
  
  <style scoped>
  .thank-you-page {
    padding: 60px 0;
    text-align: center;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    color: #28a745;
    margin-bottom: 20px;
  }
  
  p {
    color: #6c757d;
  }
  
  .btn {
    background-color: #28a745;
    border-color: #28a745;
    font-size: 1.2rem;
  }
  
  .btn:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
  </style>
  