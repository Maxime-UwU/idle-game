<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { useAuthStore } from '../stores/auth'


const auth = useAuthStore()

let pseudo: string
let password: string

</script>

<template>
    <p>Bonjour, Messire ! Veuillez remplir ce parchemin de connection</p>
        <form class="text-red-500" @submit.prevent="auth.tryLogin(pseudo,password)">
            <input type="username" v-model="pseudo">
            <input type="password" v-model="password">
            <input type="submit" value="connect">
        </form>
    <!--Faire un formulaire de login avec les instructions d'inscription et deux boutons, soit un pour la page
         register et un pour le login, soit valider le formulaire-->

</template>

