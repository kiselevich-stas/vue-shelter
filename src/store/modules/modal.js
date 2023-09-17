const state = {
    showModal: false, // Инициализируйте состояние showModal
    modalData: null,  // Инициализируйте modalData как null
};

const mutations = {
    openModal(state, pet) {
        console.log(pet);
        state.showModal = true;
        state.modalData = pet; // Устанавливаем modalData в переданное значение pet
    },
    closeModal(state) {
        state.showModal = false;
        state.modalData = null; // Обнуляем modalData при закрытии модального окна
    },
};

const actions = {
    openModal({ commit }, pet) {
        commit('openModal', pet); // Вызываем мутацию openModal
    },
    closeModal({ commit }) {
        commit('closeModal'); // Вызываем мутацию closeModal
    },
};

export default {
    state,
    mutations,
    actions,
};