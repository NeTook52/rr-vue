import { defineStore } from 'pinia'

// Функции для работы с localStorage
const CART_KEY = 'cart'

const saveToStorage = (items) => {
  try {
    console.log('Сохраняем в localStorage:', items)
    localStorage.setItem(CART_KEY, JSON.stringify(items))
    console.log('Проверяем что сохранилось:', localStorage.getItem(CART_KEY))
  } catch (e) {
    console.error('Ошибка при сохранении:', e)
  }
}

const loadFromStorage = () => {
  try {
    console.log('Загружаем из localStorage...')
    const saved = localStorage.getItem(CART_KEY)
    console.log('Прочитали из localStorage:', saved)
    const items = saved ? JSON.parse(saved) : []
    console.log('Распарсили в объект:', items)
    return items
  } catch (e) {
    console.error('Ошибка при загрузке:', e)
    return []
  }
}

// Создаем store
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  
  actions: {
    addToCart(item) {
      const existingItem = this.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...item,
          quantity: 1
        })
      }
    },
    
    removeFromCart(itemId) {
      const index = this.items.findIndex(item => item.id === itemId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },

    increaseQuantity(itemId) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(itemId) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(itemId)
        }
      }
    },
    
    clearCart() {
      this.items = []
    }
  }
}) 