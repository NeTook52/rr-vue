<template>
  <div class="success">
    <div class="success-content">
      <div class="success-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <h1>Заказ успешно оформлен!</h1>
      <p>Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время для подтверждения.</p>
      <div class="success-actions">
        <router-link to="/menu" class="btn btn-primary">
          Вернуться в меню
        </router-link>
        <button class="btn btn-text" @click="printOrder">
          <i class="fas fa-print"></i>
          Распечатать чек
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessView',
  methods: {
    printOrder() {
      window.print()
    }
  }
}
</script>

<style scoped>
.success {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--background-color) 0%, #fff 100%);
}

.success-content {
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-lg);
  max-width: 600px;
  width: 100%;
}

.success-icon {
  font-size: 5rem;
  color: var(--success-color);
  margin-bottom: 2rem;
  animation: scale-in 0.5s ease;
}

.success h1 {
  color: var(--text-primary);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: fade-in 0.5s ease 0.2s both;
}

.success p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  animation: fade-in 0.5s ease 0.4s both;
}

.success-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fade-in 0.5s ease 0.6s both;
}

@keyframes scale-in {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .success {
    padding: 1rem;
  }

  .success-content {
    padding: 2rem 1rem;
  }

  .success h1 {
    font-size: 2rem;
  }

  .success-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

@media print {
  .success {
    background: none;
    padding: 0;
  }

  .success-content {
    box-shadow: none;
    padding: 0;
  }

  .success-actions {
    display: none;
  }
}
</style> 