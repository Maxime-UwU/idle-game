<script setup lang="ts">
import axios from 'axios'
import {  getRessource, gold} from '../api/ressource'
import { onMounted } from "vue";
import { handleFactoryButtonClick } from '../api/factory'


getRessource('651d75c95c2ac5bb2ef05afb')

onMounted(() => handleFactoryButtonClick('651d75c95c2ac5bb2ef05afb'));

</script>

<template>
  <div>

    <h1>Medieval Factory</h1>
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
