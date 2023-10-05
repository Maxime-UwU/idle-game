<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';
import * as ressource from '../api/ressource';
import {type Ressource}  from '../api/ressource';
import { register} from '../api/ressource'

let gold= ref<Ressource[]>([]);


async function getRessource(userID: string){
   const playerItems= await ressource.getPlayerItems(userID)
   if(playerItems)
    gold.value = playerItems.playerRessource
  }
getRessource('651d75c95c2ac5bb2ef05afb')


</script>

<template>
  <div>
    <h1 class="green">Hello Idle Game</h1>
    <button @click="register()"> test 1</button>
    <div>
      <p v-for="(ressource, i) in gold" :key="i">{{ressource.name + ": " + ressource.quantity}}</p>
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
