
<template>
    <div v-if="showModal" class="popup">
        <div class="popup-container">
            <div class="popup__body">
                <div class="popup__close" @click="closeModal">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"
                            fill="#292929" />
                    </svg>
                </div>
                <div class="popup__content">
                    <img :src="selectedPet && selectedPet.img" width="500" height="500" class="popup__img">
                    <div class="popup__descr">
                        <div class="popup__descr-name">{{ selectedPet && selectedPet.name }}</div>
                        <div class="popup__descr-type">{{ selectedPet && selectedPet.type }}</div>
                        <div class="popup__descr-description">{{ selectedPet && selectedPet.desc }}</div>
                        <ul class="popup__descr-list">
                            <li><b>Age: </b><span class="age">{{ selectedPet && selectedPet.age }}</span></li>
                            <li><b>Inoculations: </b><span class="inoculations">{{ selectedPet && selectedPet.Inoculations }}</span></li>
                            <li><b>Diseases: </b><span class="diseases">{{ selectedPet && selectedPet.Diseases }}</span></li>
                            <li><b>Parasites: </b><span class="parasites">{{ selectedPet && selectedPet.Parasites }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'PetModal',
    setup() {
        const store = useStore();

        const selectedPet = computed(() => store.state.modal.modalData);
        const showModal = computed(() => store.state.modal.showModal);
        const closeModal = () => {
            store.dispatch('closeModal');
        };

        return {
            selectedPet,
            closeModal,
            showModal
        };
    },
};
</script>
