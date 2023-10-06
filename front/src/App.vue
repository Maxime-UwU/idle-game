<script setup lang="ts">
import {  RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import LevelUp from '../src/components/FactoryLevelUp.vue'


useAuthStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <LevelUp />
      <router-view></router-view>
    </div>
  </header>
</template>

<style scoped>
  html, body {
    width: 100%;
  }


header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
