<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HomeIdle.vue'
import CreateFactory from './components/CreateFactory.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <CreateFactory />
      <HelloWorld />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
