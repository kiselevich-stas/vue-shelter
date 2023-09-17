<template>
    <section class="notOnly">
        <div class="container notOnly-container">
            <div class="notOnly__content">
                <h2 class="notOnly__title">Not only people need a house</h2>
                <p class="notOnly__descr">
                    We offer to give a chance to a little and nice puppy with an
                    extremely wide and open heart. He or she will love you more than
                    anybody else in the world, you will see!
                </p>
                <div class="notOnly__btn btn btn-reset" @click="scrollToPetsSection">
                    Make a friend
                </div>
            </div>
            <div class="notOnly__img"></div>
        </div>
    </section>
</template>
  
<script>
import { ref } from "vue";
import { scrollToSection } from "@/hooks/scroll";

export default {
    name: "FirstScreen",
    setup() {
        const scrollToPetsSection = () => {
            scrollToSection("pets");
        };

        return {
            scrollToPetsSection,
        };
    },
};
</script>
  
<style></style>
  