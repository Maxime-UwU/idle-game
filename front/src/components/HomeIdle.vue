<script setup lang="ts">
import axios from 'axios'
import { register, getRessource, gold} from '../api/ressource'
import { onMounted } from "vue";
import { handleFactoryButtonClick } from '../api/factory'

getRessource('651d75c95c2ac5bb2ef05afb')

onMounted(() => handleFactoryButtonClick('651d638002a411e2a5e30897'));

</script>

<template>
  <div>

    <h1>Medieval Factory</h1>
    <button @click="register()"> test 1</button>
    <div>
      <p v-for="(ressource, i) in gold" :key="i">{{ressource.name + ": " + ressource.quantity}}</p>
    </div>
	<div id="container">

	</div>
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
