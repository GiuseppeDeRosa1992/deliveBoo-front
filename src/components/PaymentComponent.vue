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
      name_client: "",
      email_client: "",
      number_phone: "",
      address_client: "",
      cart: null,
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

    this.getCart()
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
    },
    clearCart() {
      localStorage.removeItem('cart');
      this.cart = [];
    },

    //FUNZIONE CHE RECUPERA ID DEL RISTORANTE TRAMITE LOCAL STORAGE
    getRestaurantId() {
      let cart = localStorage.getItem('cart');
      if (cart) {
        cart = JSON.parse(cart)
        return cart[0].restaurant_id
      }
    },

    //FUNZIONE CHE RECUPERA TUTTO L'OGGETTO DEL CARRELLO
    getCart() {
      this.cart = localStorage.getItem('cart');
      if (this.cart) {
        this.cart = JSON.parse(this.cart)
      }
    },

    //FUNZIONA ASINCRONA
    async submitOrder() {

      //RICHIAMO QUI LA FUNZIONE PAGAMENTO

      this.pay();
      try {

        const orderObject = {
          restaurant_id: this.getRestaurantId(),
          name_client: this.name_client,
          email_client: this.email_client,
          number_phone: this.number_phone,
          address_client: this.address_client,
          total: this.amount,
          dishes: this.cart.map(dish => ({
            dish_id: dish.id,
            name_dish: dish.name,
            price_dish: dish.price,
            quantity: dish.quantity,
          })),
        }

        const response = await axios.post('http://127.0.0.1:8000/api/orders', orderObject);
        if (response.status === 200) {
          console.log("ordine effettuato", response.data);
          this.$router.push({
            name: 'thank-you',
            query: {
              email: this.email_client,
              total: this.amount,
              dishes: JSON.stringify(this.cart.map(dish => ({
                name_dish: dish.name,
                price_dish: dish.price,
                quantity: dish.quantity
              })))
            }
          });
          localStorage.removeItem('cart');
        } else {
          console.log("non funziona", response.data);
        }
      } catch (error) {
        console.log("errore", error);
      }
      this.clearCart();
    }
  },
};
</script>

<template>
  <form @submit.prevent="submitOrder()" class="row my-3">
    <div class="col-6 my-3">
      <label for="name_client">Nome:</label>
      <input type="text" id="name_client" v-model="name_client" required minlength="3">
    </div>
    <div class="col-6 my-3">
      <label for="email_client">Email:</label>
      <input type="email" id="email_client" v-model="email_client" required>
    </div>
    <div class="col-6 my-3">
      <label for="number_phone">Numero di telefono:</label>
      <input type="text" id="number_phone" v-model="number_phone" required minlength="9" maxlength="10">
    </div>
    <div class="col-6 my-3">
      <label for="address_client">Indirizzo:</label>
      <input type="text" id="address_client" v-model="address_client" required minlength="5" maxlength="255">
    </div>
    <div id="dropin-container"></div>
    <button :disabled="loading">Paga ora</button>
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
