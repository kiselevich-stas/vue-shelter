import iconStore from '@/hooks/iconStore';

export default {
  state: iconStore,
  getters: {
    getIcons: (state) => state.icons,
  },
  mutations: {
    // Если вы хотите реализовать мутации для изменения состояния icons, то это можно сделать здесь.
  },
  actions: {
    // Если вы хотите реализовать действия для асинхронных операций с icons, то это можно сделать здесь.
  },
};