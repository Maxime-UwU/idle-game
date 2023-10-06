<script setup lang="ts">
import { ref } from 'vue';
import login from '../components/Login.vue'
import register from '../components/Register.vue'

 let connect = ref(true)

 function setConnect(){
    connect.value = !connect.value
}



</script>

<template>
  <main>
    <div><login v-if="connect.valueOf()"/></div>
    <div><register v-if="!connect.valueOf()"/></div>
    <div><button v-if="!connect.valueOf()" @click="setConnect()">Connectez-vous</button>
      <button v-if="connect.valueOf()" @click="setConnect()">Inscrivez-vous</button></div>
  </main>
</template>
