<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

let pseudo: string
let password: string
let confirm: string


function verifInput(){
    if(password == confirm){
        auth.register(pseudo, password)
    }else 
        pseudo = ""
        password= ""
        confirm= ""
}
</script>

<template>
    <div>
        <p>Bonjour, Messire ! Veuillez remplir ce parchemin d'inscription</p>
            <form class="text-red-500" @submit.prevent="verifInput()">
                <input type="username" v-model="pseudo" placeholder="pseudo">
                <input type="password" v-model="password" placeholder="password">
                <input type="confirm" v-model="confirm" placeholder="confirm password">
                <input type="submit" value="register">
            </form>
        <!--Faire un formulaire de login avec les instructions d'inscription et deux boutons, soit un pour la page
            register et un pour le login, soit valider le formulaire-->

    </div>

</template>

