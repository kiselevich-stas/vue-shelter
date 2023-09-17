import {
    ref,
    onMounted
} from "vue";

export function usePetsData() {
    const petsData = ref([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://6506c8383a38daf4803eb29f.mockapi.io/api/v1/pets"
            );
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            const data = await response.json();
            petsData.value = data;
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    onMounted(() => {
        fetchData();
    });

    return {
        petsData,
    };
}