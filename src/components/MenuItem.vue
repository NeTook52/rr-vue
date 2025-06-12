<template>
  <div class="menu-item">
    <div class="menu-item-image">
      <ImageLoader :src="item.image" :alt="item.name" />
    </div>
    <div class="menu-item-content">
      <h3>{{ item.name }}</h3>
      <p class="description">{{ item.description }}</p>
      <div class="menu-item-footer">
        <span class="price">{{ item.price }} ₽</span>
        <button class="btn btn-primary" @click="$emit('add-to-cart', item)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
          </svg>
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageLoader from './ImageLoader.vue'

export default {
  name: 'MenuItem',
  components: {
    ImageLoader
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-item {
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.menu-item-image {
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-color: var(--background-color);
}

.menu-item-image :deep(img) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-item:hover .menu-item-image :deep(img) {
  transform: scale(1.1);
}

.menu-item-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.menu-item h3 {
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.menu-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.btn i {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .menu-item-content {
    padding: 1rem;
  }

  .menu-item h3 {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.1rem;
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style> 