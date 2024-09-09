<script>
import PaymentComponent from '../components/PaymentComponent.vue';

export default {
    data() {
        return {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            showPayment: false,
        };
    },
    components: {
    PaymentComponent, // Registra il componente di pagamento
  },
    computed: {
        totalProducts() {
            return this.cart.reduce((total, dish) => total + dish.quantity, 0);
        },
        totalPrice() {
            return this.cart.reduce((total, dish) => total + (dish.price * dish.quantity), 0).toFixed(2);
        },
    },
    methods: {
        processPayment() {
            // Qui puoi aggiungere la logica per il pagamento.
            // Ad esempio, inviare i dati dell'ordine a un server o mostrare una finestra di pagamento.
            alert('Pagamento effettuato con successo!'); // Placeholder per il pagamento
            this.clearCart(); // Pulisce il carrello dopo il pagamento
            this.$router.push('/'); // Reindirizza alla home o ad un'altra pagina dopo il pagamento
        },
        clearCart() {
            localStorage.removeItem('cart');
            this.cart = [];
        }
    },
};

</script>

<template>
    <div class="app-cart">
        <div class="container">
            <h2 class="mb-4 text-center">Riepilogo Ordine</h2>
            <div class="cart-content">
                <div v-if="cart.length === 0" class="text-center">
                    <p>Il carrello è vuoto.</p>
                </div>
                <div v-else>
                    <div class="cart-items mb-4">
                        <div class="cart-item" v-for="dish in cart" :key="dish.id">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fs-5">{{ dish.name }}</span>
                                <span class="fs-5">€{{ dish.price }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <span>Quantità: {{ dish.quantity }}</span>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div class="cart-totals border-top border-2 border-dark pt-3 mt-4">
                        <p class="mb-1 fs-5">Totale prodotti: {{ totalProducts }}</p>
                        <p class="fs-4">Totale da pagare: €{{ totalPrice }}</p>
                    </div>
                    <div class="text-center mt-4">
                        <button v-if="cart.length > 0" class="btn btn-success" @click="showPayment = true">Procedi al ordine</button>
                        <payment-component v-if="showPayment" @paymentSuccess="clearCart" :data="cart"/> <!-- Componente per il pagamento -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-cart {
    padding: 60px 0;
    /* Spazio tra header e footer */
}

.container {
    max-width: 900px;
    margin: auto;
}

h2 {
    font-size: 2rem;
    color: #333;
}

.cart-content {
    background: #e4e2e2;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-items {
    margin-bottom: 1rem;
}

.cart-item {
    padding: 10px 0;
}

.cart-item hr {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 10px 0;
}

.cart-totals {
    margin-top: 1rem;
}

.btn-success {
    background-color: #28a745;
    border-color: #28a745;
    color: white;
    padding: 10px 20px;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
}
</style>
