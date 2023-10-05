<script setup lang="ts">
import axios from 'axios';
let pseudo: string
let password: string

function login(){
    const user={username:pseudo, password:password}
    const test = await axios.get('http://localhost:3001/auth/me',user)
  console.log(test.data)
    console.log(user);
}
</script>


<template>
    <p>Bonjour, Messire ! Veuillez remplir ce parchemin d'inscription</p>
        <form @submit.prevent="login()">
            <input type="username" v-model="pseudo">
            <input type="password" v-model="password">
            <button>Register</button>
            <input type="submit">
        </form>
    <!--Faire un formulaire de login avec les instructions d'inscription et deux boutons, soit un pour la page
         register et un pour le login, soit valider le formulaire-->
    <RouterLink to="/login">Connectez-vous</RouterLink>

</template>

