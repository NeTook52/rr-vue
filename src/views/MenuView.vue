<template>
  <div class="menu-view">
    <div class="menu-header">
      <h1>Меню</h1>
    </div>

    <div class="categories-grid">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="['category-block', { active: selectedCategory === category }]"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
      <button 
        class="category-block"
        :class="{ active: selectedCategory === '' }"
        @click="selectCategory('')"
      >
        Все блюда
      </button>
    </div>

    <div class="menu-grid">
      <MenuCard 
        v-for="item in filteredItems" 
        :key="item.id" 
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MenuCard from '../components/MenuCard.vue';
import { menuItems } from '../data/menu';

const selectedCategory = ref('');

const categories = computed(() => {
  return [...new Set(menuItems.map(item => item.category))];
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const filteredItems = computed(() => {
  if (!selectedCategory.value) return menuItems;
  return menuItems.filter(item => item.category === selectedCategory.value);
});
</script>

<style scoped>
.menu-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-header {
  margin-bottom: 2rem;
}

.menu-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-block {
  padding: 1.5rem;
  background: white;
  border: 2px solid #ff4d4d;
  border-radius: 12px;
  font-size: 1.2rem;
  color: #ff4d4d;
  cursor: pointer;
  transition: all 0.3s;
}

.category-block:hover {
  background: #ff4d4d;
  color: white;
}

.category-block.active {
  background: #ff4d4d;
  color: white;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .menu-view {
    padding: 1rem;
  }

  .menu-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style> 