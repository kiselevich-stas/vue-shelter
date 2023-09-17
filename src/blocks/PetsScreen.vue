<template>
     <section class="pets" id="pets">
            <div class="container pets-container ">
                <h3 class="pets__title">Our friends who <br>
                    are looking for a house</h3>
                <div class="obertka">
                    
                    <PetsSliderVue/>
                </div>
                
                <div class='pets__btn btn btn-reset'><router-link class='nav__link link' to="/pets/">Get to know the rest</router-link></div>
            </div>
        </section>
</template>
<script>
import PetsSliderVue from '@/components/PetsSlider.vue';

export default {
    components:{
        PetsSliderVue
    }
}
</script>
<style>
    
</style>