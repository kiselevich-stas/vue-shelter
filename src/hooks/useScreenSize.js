import {
    ref,
    onMounted
} from "vue";

export function useScreenSize() {
    const screenWidth = ref(window.innerWidth);

    onMounted(() => {
        window.addEventListener("resize", () => {
            screenWidth.value = window.innerWidth;
        });
    });

    return {
        screenWidth,
    };
}