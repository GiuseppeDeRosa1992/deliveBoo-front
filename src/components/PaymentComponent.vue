<template>
    <div>
      <div id="dropin-container"></div>
      <button @click="pay" :disabled="loading">Paga ora</button>
    </div>
  </template>
  
  <script>
  import dropin from "braintree-web-drop-in";
  import axios from "axios";
  
  export default {
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || [],

        clientToken: null,
        instance: null,
        loading: false,
      };
    },
    mounted() {
      // Ottieni il client token da Laravel
      axios.get("http://127.0.0.1:8000/api/braintree/token")
        .then(response => {
          this.clientToken = response.data.token;
          // Inizializza il Braintree Drop-in UI
          this.initializeBraintree();
        })
        .catch(error => {
          console.error("Errore nel recuperare il token:", error);
        });
    },
    methods: {
      initializeBraintree() {
        dropin.create({
          authorization: this.clientToken,
          container: '#dropin-container',
        }, (error, instance) => {
          if (error) {
            console.error(error);
          } else {
            this.instance = instance;
          }
        });
      },
      pay() {
        if (!this.instance) return;
        this.loading = true;
  
        this.instance.requestPaymentMethod((error, payload) => {
          if (error) {
            console.error(error);
            this.loading = false;
            return;
          }
  
          // Invia il nonce al server Laravel
          axios.post("http://127.0.0.1:8000/api/braintree/checkout", {
            payment_method_nonce: payload.nonce,
            amount: this.$cart, // L'importo da pagare
          })
          .then(response => {
            if (response.data.success) {
              alert("Pagamento completato!");
              // Puoi fare ulteriori azioni come svuotare il carrello
            } else {
              alert("Errore nel pagamento: " + response.data.message);
            }
            this.loading = false;
          })
          .catch(error => {
            console.error("Errore nel pagamento:", error);
            this.loading = false;
          });
        });
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  