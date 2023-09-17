<template>
    <section class="help" id="help">
        <div class="container help-container">
            <h2 class="help__title">How you can help<br> our shelter</h2>
            <IconList :icons="icons" />
        </div>
    </section>
</template>
  
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import IconList from '@/components/IconList.vue';

export default {
    name: "HelpScreen",
    components: {
        IconList
    },

    setup() {
        const store = useStore();

        const icons = computed(() => {
            return store.getters['getIcons'];
        });

        return {
            icons
        };
    }
}
</script>
  
<style></style>
  