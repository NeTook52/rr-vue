<!-- MenuCard.vue -->
<template>
  <div class="menu-card">
    <div class="menu-card__image">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="menu-card__content">
      <h3 class="menu-card__title">{{ item.name }}</h3>
      <p class="menu-card__description">{{ item.description }}</p>
      <div class="menu-card__footer">
        <span class="menu-card__price">{{ item.price }} ₽</span>
        <button class="menu-card__button" @click="addToCart">
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.item);
};
</script>

<style scoped>
.menu-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
}

.menu-card__image {
  height: 200px;
  overflow: hidden;
}

.menu-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-card:hover .menu-card__image img {
  transform: scale(1.05);
}

.menu-card__content {
  padding: 1rem;
}

.menu-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.menu-card__description {
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.menu-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-card__price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ff4d4d;
}

.menu-card__button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-card__button:hover {
  background: #ff3333;
}
</style> 