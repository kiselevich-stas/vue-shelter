<template>
    <ul class="help__list list-reset">
        <li class="help__item" v-for="(icon, index) in icons" :key="index">
            <div class="help__icon" v-html="icon.svg">
            </div>
            <a class="help__descr">{{ icon.text }}</a>
        </li>
    </ul>
</template>
<script>
export default {
    name: "IconList",
    props: {
        icons: {
            type: Array,
            required: true,
        },
    },
   

}
</script>
<style></style>