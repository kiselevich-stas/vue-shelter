
<template>
    <div>
        <swiper ref="swiper" :navigation="false" class="swiper pets__slider-wrapper"
            :slides-per-view="computedSlidesPerView" :loop="true">
            <swiper-slide v-for="pet in displayedPets" :key="pet.id">
                <PetCard :item="pet" />
            </swiper-slide>
        </swiper>
        <div class="btn-wrapper">
            <button class="btn-reset btn-next swiper-button-prev" @click="prevSlide"></button>
            <button class="btn-reset btn-prev swiper-button-next" @click="nextSlide"></button>
        </div>
    </div>
</template>
  
<script>
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";

import { ref, computed, onMounted } from "vue";
import { usePetsData } from "@/hooks/usePetsData";
import { useSwiper } from "@/hooks/useSwiper";
import { useScreenSize } from "@/hooks/useScreenSize";

import PetCard from "./PetCard.vue";

SwiperCore.use([Navigation]);

export default {
    name: "PetsSlider",
    components: {
        Swiper,
        SwiperSlide,
        PetCard,
    },
    setup() {
        const { petsData } = usePetsData();
        const { swiperRef, initSwiper, prevSlide, nextSlide } = useSwiper();
        const { screenWidth } = useScreenSize();

        const getSlidesToShow = () => {
            if (screenWidth.value >= 1280) {
                return 3; // 4 слайда для экранов шире 1280px
            } else if (screenWidth.value >= 768) {
                return 2; // 3 слайда для экранов шире 768px
            } else {
                return 1; // По умолчанию 2 слайда
            }
        };

        const displayedPets = computed(() => {
            return petsData.value.slice(0, getSlidesToShow());
        });

        const computedSlidesPerView = computed(() => {
            if (screenWidth.value >= 1280) {
                return 3; // 4 слайда для экранов шире 1280px
            } else if (screenWidth.value >= 768) {
                return 2; // 3 слайда для экранов шире 768px
            } else {
                return 1; // По умолчанию 2 слайда
            }
        });
        onMounted(async () => {
            try {
                swiperRef.value = document.querySelector(".swiper-container").swiper;
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        });
        return {
            displayedPets,
            computedSlidesPerView,
            prevSlide,
            nextSlide,
            onSwiperInit: initSwiper,
        };
    },
};
</script>
  
<style>
/* Ваш стиль здесь */
</style>
  