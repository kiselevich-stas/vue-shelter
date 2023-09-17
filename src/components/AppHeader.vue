<template lang="">
    <header class="header">
        <div class="container header-container">
            <div class='header__logo header__logo-burger'>
                <router-link class='nav__link link' to="/">
                    <h1 class="header__title">Cozy house</h1>
                    <h5 class="header__subtitle">Shelter for pets in Boston</h5>
                </router-link>
            </div>
            <MainNav/>
           
            <MainBurger/>
        </div>
      </header>
</template>
<script>
import MainNav from './MainNav.vue';
import MainBurger from './MainBurger.vue';
export default {
    name: "TheHeader",
    components: {
        MainNav,
        MainBurger
    },
}
</script>
<style lang="scss"></style>