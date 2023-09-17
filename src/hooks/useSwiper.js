import {
    ref
} from "vue";
import SwiperCore, {
    Navigation
} from "swiper/core";

SwiperCore.use([Navigation]);

export function useSwiper() {
    const swiperRef = ref(null);

    const initSwiper = (swiper) => {
        swiperRef.value = swiper;
    };

    const prevSlide = () => {
        if (swiperRef.value) {
            swiperRef.value.slidePrev();
        }
    };

    const nextSlide = () => {
        if (swiperRef.value) {
            swiperRef.value.slideNext();
        }
    };

    return {
        swiperRef,
        initSwiper,
        prevSlide,
        nextSlide,
    };
}