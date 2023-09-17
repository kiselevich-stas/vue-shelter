<template>
    <div class="pets__card" :id="item.img">
        <img :src="item.img" alt="pets_cat" class="pets__card-img">
        <p class="pets__card-name">{{ item.name }}</p>
        <button class="pets__card-btn btn btn-reset" @click="openModal(item)">Learn more</button>
    </div>
</template>
  
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'PetCard',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();

        const showModal = computed(() => store.state.modal.showModal);
        const selectedPet = computed(() => store.state.modal.modalData);

        const openModal = (pet) => {
            console.log(store);
            store.dispatch('openModal', pet);
        };

        const closeModal = () => {
            store.dispatch('closeModal');
        };

        return {
            showModal,
            selectedPet,
            openModal,
            closeModal,
        };
    },
};
</script>
  
<style></style>
  