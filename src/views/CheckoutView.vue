<template>
  <div class="checkout">
    <div class="checkout-header">
      <h1>Оформление заказа</h1>
    </div>

    <div class="checkout-content">
      <div class="order-details">
        <h2>Ваш заказ</h2>
        <div class="order-items">
          <div v-for="item in cartStore.items" :key="item.id" class="order-item">
            <span>{{ item.name }} x {{ item.quantity }}</span>
            <span>{{ item.price * item.quantity }} ₽</span>
          </div>
        </div>
        
        <div class="order-total">
          <div class="total-row">
            <span>Итого:</span>
            <span>{{ cartStore.totalPrice }} ₽</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="validateAndSubmit" class="order-form">
        <div class="form-group">
          <input 
            type="text" 
            v-model="form.name" 
            required
            placeholder="Ваше имя"
            :class="{ 'error': errors.name }"
          >
          <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
        </div>
        
        <div class="form-group">
          <input 
            type="tel" 
            v-model="form.phone" 
            required
            placeholder="Телефон"
            :class="{ 'error': errors.phone }"
          >
          <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
        </div>

        <div class="form-group">
          <input 
            type="text" 
            v-model="form.address" 
            required
            placeholder="Адрес доставки"
            :class="{ 'error': errors.address }"
          >
          <span class="error-message" v-if="errors.address">{{ errors.address }}</span>
        </div>

        <div class="payment-methods">
          <label class="payment-method">
            <input type="radio" v-model="form.payment" value="card" checked>
            <span>Картой</span>
          </label>
          <label class="payment-method">
            <input type="radio" v-model="form.payment" value="cash">
            <span>Наличными</span>
          </label>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Оформление...' : `Оформить заказ на ${cartStore.totalPrice} ₽` }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CheckoutView',
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        address: '',
        payment: 'card'
      },
      errors: {
        name: '',
        phone: '',
        address: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    validateForm() {
      let isValid = true
      this.errors = {
        name: '',
        phone: '',
        address: ''
      }

      // Проверка имени
      if (!this.form.name.trim()) {
        this.errors.name = 'Введите ваше имя'
        isValid = false
      } else if (this.form.name.trim().length < 2) {
        this.errors.name = 'Имя должно быть не короче 2 символов'
        isValid = false
      }

      // Проверка телефона
      const phoneRegex = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Введите номер телефона'
        isValid = false
      } else if (!phoneRegex.test(this.form.phone.trim())) {
        this.errors.phone = 'Введите корректный номер телефона'
        isValid = false
      }

      // Проверка адреса
      if (!this.form.address.trim()) {
        this.errors.address = 'Введите адрес доставки'
        isValid = false
      } else if (this.form.address.trim().length < 10) {
        this.errors.address = 'Введите более подробный адрес'
        isValid = false
      }

      return isValid
    },
    async validateAndSubmit() {
      if (this.validateForm()) {
        this.isSubmitting = true
        try {
          // Здесь будет отправка заказа на сервер
          await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация запроса
          this.cartStore.clearCart()
          this.$router.push('/order-success')
        } catch (error) {
          console.error('Ошибка при оформлении заказа:', error)
        } finally {
          this.isSubmitting = false
        }
      }
    }
  }
}
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.checkout-header {
  text-align: center;
  margin-bottom: 30px;
}

.checkout-header h1 {
  font-size: 28px;
  color: #333;
}

.order-details {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.order-details h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
}

.order-items {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.order-total {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  color: #ff4d4d;
}

.order-form {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  border-color: #ff4d4d;
  outline: none;
}

.payment-methods {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-button:hover {
  background: #ff3333;
}

@media (max-width: 768px) {
  .checkout {
    padding: 15px;
  }
  
  .order-details,
  .order-form {
    padding: 15px;
  }
}

.error {
  border-color: #ff4d4d !important;
}

.error-message {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

.submit-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style> 