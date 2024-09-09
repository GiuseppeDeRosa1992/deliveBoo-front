<script>
  import dropin from "braintree-web-drop-in";
  import axios from "axios";
  
  export default {
    props: ['amount'], // Passa l'importo come prop
    data() {
      return {
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
          locale: 'it_IT',
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
  
          // Invia il nonce al server Laravel insieme all'importo
          axios.post("http://127.0.0.1:8000/api/braintree/checkout", {
            payment_method_nonce: payload.nonce,
            amount: this.amount, // Usa l'importo passato come prop
          })
          .then(response => {
            if (response.data.success) {
              this.$router.push({ name: 'thank-you' }); // Reindirizza alla Thank You Page
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
  
<template>
  <form @submit.prevent="submitPayment" class="row my-3">
    <div class="col-6 my-3">
      <label for="name_client">Nome:</label>
      <input type="text" id="name_client" v-model="name_client" required minlength="3">
    </div>
    <div class="col-6 my-3">
      <label for="email_client">Email:</label>
      <input type="text" id="email_client" v-model="email_client" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
    </div>
    <div class="col-6 my-3">
      <label for="number_phone">Numero di telefono:</label>
      <input type="text" id="number_phone" v-model="number_phone" required minlength="9" maxlength="10" pattern="">
    </div>
    <div class="col-6 my-3">
      <label for="address_client">Indirizzo:</label>
      <input type="text" id="address_client" v-model="address_client" required minlength="5" maxlength="255">
    </div>
    <div id="dropin-container"></div>
    <button @click="pay" :disabled="loading">Paga ora</button>
  </form>
</template>

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
  
  
