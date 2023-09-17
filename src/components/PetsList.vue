<template>
    <div>
        <h3 class="pets__title">Our friends who <br> are looking for a house</h3>
        <div v-if="isPostsLoading" class="loading-spinner">
            <i class="fa fa-spinner fa-spin"></i>
        </div>
        <div v-else class="pets__slider-wrapper">
            <div class="pets__slider">
                <PetCard v-for="pet in paginatedPosts" :key="pet.id" :item="pet" />
            </div>
        </div>
        <div class="pagination">
            <ul class="list-reset pagination-ul">
                <li><button class="btn-reset pagination-btn pagination-first" @click="goToFirstPage"
                        :disabled="currentPage === 1 || isPostsLoading">&lt;&lt;</button></li>
                <li><button class="is-active pagination-btn pagination-prev" @click="prevPage"
                        :disabled="currentPage === 1 || isPostsLoading">&lt;</button></li>
                <li><span class="btn-reset pagination-btn pagination__page">{{ currentPage }}</span></li>
                <li><button class="btn-reset pagination-btn pagination-next" @click="nextPage"
                        :disabled="isPostsLoading">></button></li>
                <li><button class="btn-reset pagination-btn pagination-last" @click="goToLastPage"
                        :disabled="currentPage === totalPages || isPostsLoading">>></button>
                </li>
            </ul>

        </div>
    </div>
</template>
  
<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import PetCard from './PetCard.vue';
import axios from 'axios';

export default {
  components: {
    PetCard,
  },
  setup() {
    const posts = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(8);
    const isPostsLoading = ref(false);

    const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage.value));

    const fetchPosts = async (page = 1) => {
      isPostsLoading.value = true;
      try {
        const response = await axios.get('https://6506c8383a38daf4803eb29f.mockapi.io/api/v1/pets', {
          params: {
            page: page,
            perPage: itemsPerPage.value,
          },
        });
        console.log('API Response:', response.data);
        posts.value = response.data;
        currentPage.value = page;
      } catch (e) {
        console.error('Error:', e);
      } finally {
        isPostsLoading.value = false;
      }
    };

    const updateItemsPerPage = () => {
      if (window.innerWidth < 576) {
        itemsPerPage.value = 3;
      } else if (window.innerWidth < 1280) {
        itemsPerPage.value = 6;
      } else {
        itemsPerPage.value = 8;
      }
    };

    const handleWindowResize = () => {
      updateItemsPerPage();
    };

    onMounted(() => {
      updateItemsPerPage();
      fetchPosts(currentPage.value);
      window.addEventListener('resize', handleWindowResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowResize);
    });

    const paginatedPosts = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;

      return posts.value.slice(startIndex, endIndex);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        fetchPosts(currentPage.value + 1);
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        fetchPosts(currentPage.value - 1);
      }
    };

    const goToFirstPage = () => {
      if (currentPage.value !== 1) {
        fetchPosts(1);
      }
    };

    const goToLastPage = () => {
      if (currentPage.value !== totalPages.value) {
        fetchPosts(totalPages.value);
      }
    };

    return {
      paginatedPosts,
      isPostsLoading,
      currentPage,
      itemsPerPage,
      nextPage,
      prevPage,
      goToFirstPage,
      goToLastPage,
      totalPages,
    };
  },
};
</script>
  
<style lang="scss">

</style>