<template>
  <div class="image-loader" :style="{ paddingTop: `${aspectRatio}%` }">
    <img
      v-if="!error"
      :src="src"
      :alt="alt"
      @load="onLoad"
      @error="onError"
      class="image"
    />
    <div v-else class="placeholder">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLoader',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    aspectRatio: {
      type: Number,
      default: 75
    }
  },
  data() {
    return {
      loaded: false,
      error: false
    }
  },
  methods: {
    onLoad() {
      this.loaded = true
      this.error = false
    },
    onError() {
      this.error = true
      this.loaded = false
    }
  }
}
</script>

<style scoped>
.image-loader {
  position: relative;
  width: 100%;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  color: var(--text-secondary);
}

.placeholder svg {
  opacity: 0.5;
}
</style> 