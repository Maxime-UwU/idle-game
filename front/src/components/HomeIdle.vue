<script setup lang="ts">
import axios from 'axios'

async function register(ressourceName: string) {
  const test = await axios.get(`http://localhost:3001/ressource?name=${ressourceName}`)
  console.log(test.data)
} 

  
</script>

<template>
  <div>
    <h1 class="green">Hello Idle Game</h1>
    <button @click="register('gold')"></button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

</style>
