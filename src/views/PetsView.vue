<template>
    <div class="">
        <AppHeader />
        <div class="container">
            <PetsList />
        </div>
        <AppFooter />
        <PetModal />
    </div>
</template>
  

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import PetModal from '@/components/PetModal.vue';
import PetsList from '@/components/PetsList.vue';
export default {
    name: 'HomeView',
    components: {
        AppHeader,
        AppFooter,
        PetModal,
        PetsList
    }
}
</script>