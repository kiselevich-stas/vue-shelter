<template>
  <div class="home">
    <AppHeader/>
    <FirstScreen/>
    <AboutScreen/>
    <PetsScreen/>
    <HelpScreen/>
    <AdditionScreen/>
    <AppFooter/>
    <PetModal/>

  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import FirstScreen from '@/blocks/FirstScreen.vue';
import AboutScreen from '@/blocks/AboutScreen.vue';
import PetsScreen from '@/blocks/PetsScreen.vue';
import HelpScreen from '@/blocks/HelpScreen.vue';
import AdditionScreen from '@/blocks/AdditionScreen.vue';
import AppFooter from '@/components/AppFooter.vue';
import PetModal from '@/components/PetModal.vue';
export default {
  name: 'HomeView',
  components: {
    AppHeader,
    FirstScreen,
    AboutScreen,
    PetsScreen,
    HelpScreen,
    AdditionScreen,
    AppFooter,
    PetModal
  }
}
</script>
