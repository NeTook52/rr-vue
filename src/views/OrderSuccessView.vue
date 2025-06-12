<template>
  <div class="success-page">
    <div class="success-content">
      <div class="success-icon">✓</div>
      <h1>Заказ успешно оформлен!</h1>
      <p>Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время для подтверждения.</p>
      <router-link to="/menu" class="back-button">
        Вернуться в меню
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccessView'
}
</script>

<style scoped>
.success-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.success-content {
  text-align: center;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 20px;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
}

.back-button {
  display: inline-block;
  padding: 12px 24px;
  background: #ff4d4d;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.2s;
}

.back-button:hover {
  background: #ff3333;
}
</style> 