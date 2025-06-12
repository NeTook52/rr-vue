<script>
import { useCartStore } from './stores/cart'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { computed } from 'vue'

export default {
  name: 'App',
  
  setup() {
    const cartStore = useCartStore()

    // Загружаем сохранённую корзину при старте приложения
    const savedCart = localStorage.getItem('restaurant-cart')
    if (savedCart) {
      cartStore.items = JSON.parse(savedCart)
    }

    // Следим за изменениями корзины и сохраняем их
    watch(
      () => cartStore.items,
      (items) => {
        localStorage.setItem('restaurant-cart', JSON.stringify(items))
      },
      { deep: true }
    )

    // Вычисляем количество товаров в корзине
    const cartItemsCount = computed(() => cartStore.items.length)

    return {
      cartItemsCount
    }
  }
}
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/" aria-label="На главную">
          <i class="fas fa-utensils me-2"></i>
          <span>Наш Ресторан</span>
        </router-link>
        
        <div class="nav-links">
          <router-link class="nav-link" to="/" aria-label="Перейти на главную">
            <i class="fas fa-home"></i>
            <span>Главная</span>
          </router-link>
          
          <router-link class="nav-link" to="/menu" aria-label="Перейти в меню">
            <i class="fas fa-book-open"></i>
            <span>Меню</span>
          </router-link>
          
          <router-link to="/cart" class="btn btn-outline" aria-label="Перейти в корзину">
            <i class="fas fa-shopping-cart"></i>
            <span v-if="cartItemsCount > 0" class="badge">
              {{ cartItemsCount }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>

    <main class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link i,
.btn i {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 0.5rem;
  }
  
  .nav-link span {
    display: none;
  }
  
  .nav-link i {
    margin-right: 0;
    font-size: 1.2rem;
  }
}
</style> 