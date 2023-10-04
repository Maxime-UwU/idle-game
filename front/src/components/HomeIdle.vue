<script setup lang="ts">
import axios from "axios"
async function register() {
  const data = {
    username: 'test',
    password: 'test1234'
  }
  await axios.post('http://localhost:3001/auth/register', data)
  .catch(error => {
      console.error("There was an error!", error);
    });
}
  
</script>

<template>
  <div>
    <h1>Hello Idle Game</h1>
    <button class="text-red-500" @click="register()" >Test</button>
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
