export const persistedState = {
  persist: true,
  key: 'cart-storage',
  storage: window.localStorage,

  beforeRestore: (ctx) => {
    console.log('Before restoring state:', ctx)
  },
  afterRestore: (ctx) => {
    console.log('After restoring state:', ctx)
  },

  serialize: (state) => {
    return JSON.stringify(state)
  },
  deserialize: (str) => {
    return JSON.parse(str)
  },
} 