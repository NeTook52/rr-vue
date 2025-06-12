<template>
  <div class="home">
    <section class="hero" :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920)' }">
      <div class="hero-content">
        <h1>Добро пожаловать в наш ресторан</h1>
        <p>Изысканная кухня и незабываемая атмосфера</p>
        <router-link to="/menu" class="cta-button">Посмотреть меню</router-link>
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500" alt="Свежие ингредиенты">
        <h2>Свежие ингредиенты</h2>
        <p>Мы используем только лучшие и свежие ингредиенты для наших блюд</p>
      </div>
      <div class="feature">
        <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=500" alt="Профессиональные повара">
        <h2>Профессиональные повара</h2>
        <p>Наши шеф-повара - настоящие мастера своего дела</p>
      </div>
      <div class="feature">
        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500" alt="Уютная атмосфера">
        <h2>Уютная атмосфера</h2>
        <p>Идеальное место для встреч с друзьями и семейных ужинов</p>
      </div>
    </section>

    <section class="popular-dishes">
      <h2>Популярные блюда</h2>
      <div class="dishes-grid">
        <MenuCard 
          v-for="item in popularDishes" 
          :key="item.id" 
          :item="item"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import MenuCard from '../components/MenuCard.vue';
import { menuItems } from '../data/menu';

const popularDishes = menuItems.slice(0, 3);
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #ff4d4d;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background: #ff3333;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background: white;
}

.feature {
  text-align: center;
  padding: 2rem;
}

.feature img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.feature h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature p {
  color: #666;
  line-height: 1.6;
}

.popular-dishes {
  padding: 4rem 2rem;
  background: #f8f8f8;
}

.popular-dishes h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .features {
    padding: 2rem 1rem;
  }

  .popular-dishes {
    padding: 2rem 1rem;
  }

  .dishes-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style> 