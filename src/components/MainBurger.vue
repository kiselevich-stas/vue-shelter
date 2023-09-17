<template>
    <div>
        <div class="hamburger" @click="toggleBurger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        <div class="burger-container" :class="{ active: isBurgerOpen }">
            <div class="burger__menu" :class="{ show: isBurgerOpen }">
                <div class="header__logo">
                    <h1 class="header__title">
                        <router-link class="nav__link link" to="/">Cozy House</router-link>
                    </h1>
                    <h5 class="header__subtitle">Shelter for pets in Boston</h5>
                </div>
                <ul class="nav__list list-reset">
                    <li class="nav__item">
                        <router-link class="nav__link link" to="/">About the shelter</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link link" to="/pets/">Our pets</router-link>
                    </li>
                    <li class="nav__item">
                        <div @click="scrollToPetsSection('help')" class="nav__link link">
                            Help the shelter
                        </div>
                    </li>
                    <li class="nav__item">
                        <div @click="scrollToPetsSection('contacts')" class="nav__link link">
                            Contacts
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { scrollToSection } from "@/hooks/scroll";
export default {
    setup() {
        const isBurgerOpen = ref(false);

        const scrollToPetsSection = (sectionId) => {
            scrollToSection(sectionId);
        };
        const toggleBurger = () => {
            isBurgerOpen.value = !isBurgerOpen.value;
            if (isBurgerOpen.value) {
                document.body.classList.add("hidden");
                document.querySelector(".header-container").classList.add("active");
                document.querySelector(".hamburger").classList.add("active");
            } else {
                document.body.classList.remove("hidden");
                document.querySelector(".header-container").classList.remove("active");
                document.querySelector(".hamburger").classList.remove("active");
            }
        };

        return {
            isBurgerOpen,
            toggleBurger,
            scrollToPetsSection,
        };
    },
};
</script>

<style scoped>
/* Ваши стили для бургера и меню */
</style>
