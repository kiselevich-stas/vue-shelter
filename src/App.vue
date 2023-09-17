<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import InnerLayout from "./layouts/InnerLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import "@/assets/scss/app.scss";
import 'font-awesome/css/font-awesome.css'

export default {
  components: {
    MainLayout,
    InnerLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Загрузка';
      }
    },
  }
};
</script>
<style></style>
