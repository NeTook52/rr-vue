<template>
  <div class="cart">
    <div class="cart-header">
      <h1>Корзина</h1>
      <button v-if="cartStore.items.length" class="btn btn-text" @click="cartStore.clearCart">
        <i class="fas fa-trash"></i>
        Очистить корзину
      </button>
    </div>

    <div v-if="!cartStore.items.length" class="empty-cart">
      <i class="fas fa-shopping-cart"></i>
      <h2>Корзина пуста</h2>
      <p>Добавьте блюда из меню, чтобы сделать заказ</p>
      <router-link to="/menu" class="btn btn-primary">
        Перейти в меню
      </router-link>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-image">
          <div class="cart-item-content">
            <h3>{{ item.name }}</h3>
            <p class="description">{{ item.description }}</p>
            <div class="cart-item-footer">
              <div class="quantity-controls">
                <button class="btn btn-icon" @click="decreaseQuantity(item)">
                  <i class="fas fa-minus"></i>
                </button>
                <span class="quantity">{{ item.quantity }}</span>
                <button class="btn btn-icon" @click="increaseQuantity(item)">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="price">{{ item.price * item.quantity }} ₽</div>
            </div>
          </div>
          <button class="btn btn-icon btn-danger" @click="removeItem(item)">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Итого</h2>
        <div class="summary-row">
          <span>Товары ({{ totalItems }})</span>
          <span>{{ cartStore.totalPrice }} ₽</span>
        </div>
        <div class="summary-row">
          <span>Доставка</span>
          <span>Бесплатно</span>
        </div>
        <div class="summary-row total">
          <span>К оплате</span>
          <span>{{ cartStore.totalPrice }} ₽</span>
        </div>
        <router-link to="/checkout" class="btn btn-primary btn-large">
          Оформить заказ
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartView',
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  computed: {
    totalItems() {
      return this.cartStore.items.reduce((total, item) => total + item.quantity, 0)
    }
  },
  methods: {
    increaseQuantity(item) {
      this.cartStore.increaseQuantity(item.id)
    },
    decreaseQuantity(item) {
      this.cartStore.decreaseQuantity(item.id)
    },
    removeItem(item) {
      this.cartStore.removeFromCart(item.id)
    }
  }
}
</script>

<style scoped>
.cart {
  padding: 2rem;
  max-width: var(--container-width);
  margin: 0 auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.cart-header h1 {
  color: var(--text-primary);
  font-size: 2.5rem;
  margin: 0;
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
}

.empty-cart i {
  font-size: 4rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.empty-cart h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.empty-cart p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 1.5rem;
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.cart-item:hover {
  box-shadow: var(--shadow-md);
}

.cart-item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.cart-item-content {
  display: flex;
  flex-direction: column;
}

.cart-item h3 {
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.cart-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity {
  font-weight: 500;
  min-width: 2rem;
  text-align: center;
}

.btn-icon {
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.btn-icon:hover {
  background: var(--background-color);
}

.btn-danger {
  color: var(--danger-color);
  border-color: var(--danger-color);
}

.btn-danger:hover {
  background: var(--danger-color);
  color: white;
}

.price {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
}

.cart-summary {
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  height: fit-content;
}

.cart-summary h2 {
  margin: 0 0 1.5rem;
  color: var(--text-primary);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.summary-row.total {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.btn-large {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .cart {
    padding: 1rem;
  }

  .cart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }

  .cart-item-image {
    width: 100px;
    height: 100px;
  }

  .btn-danger {
    grid-column: 2;
    justify-self: end;
  }

  .cart-summary {
    position: sticky;
    bottom: 0;
    margin: 0 -1rem;
    border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  }
}
</style> 