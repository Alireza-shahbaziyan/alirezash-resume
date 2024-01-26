<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
<div class="relative text-white">
  <NavigationBar/>
  <main>
    <RouterView />
  </main>
</div>
</template>
