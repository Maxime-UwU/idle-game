<template>
    <div class="relative">
        <p class="text-white text-4xl">this is marketitemlist</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

onMounted(() => {
    loadMarketItems();
});

function loadMarketItems() {
    
}

</script>

<style scoped>

</style>