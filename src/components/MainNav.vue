<template lang="">
    <nav class='nav'>
        <ul class="nav__list list-reset">
            <li class="nav__item"><router-link class='nav__link link' to="/">About the shelter</router-link></li>
            <li class="nav__item"><router-link class='nav__link link' to="/pets/">Our pets</router-link></li>
            <li class="nav__item"><div @click="scrollToPetsSection('help')" class="nav__link link">Help the shelter</div></li>
            <li class="nav__item"><div @click="scrollToPetsSection('contacts')" class="nav__link link">Contacts</div></li>
        </ul>
    </nav>
</template>
<script>
import { ref } from "vue";
import { scrollToSection } from "@/hooks/scroll";
export default {
    setup() {
        const scrollToPetsSection = (sectionId) => {
            scrollToSection(sectionId);
        };

        return {
            scrollToPetsSection,
        };
    },
}
</script>
<style lang="scss">
.nav {
    margin-left: auto;
}

.nav__list {
    display: flex;
    justify-content: space-between;

}

.nav__item:not(:last-child) {
    margin-right: 35px;
}

.nav__link {
    font-size: 15px;
    font-family: Arial, sans-serif;
    line-height: 160%;
    position: relative;

}

.nav__link:hover {
    color: var(--color-primary);
    transition: color .2s linear;
    transform: translateY(1px);
    transition: 0.3s linear;
}

.nav__link.active:before {
    display: block;
    content: "";
    width: 100%;
    position: absolute;
    border-bottom: 2px solid var(--color-primary);
    bottom: -30%;
    z-index: 8;
}
</style>