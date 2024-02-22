<template>
  <div class="drawer text-white">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar flex flex-row-reverse md:flex-row BG">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div class="flex-1 px-2 mx-2 FONT-BOLD text-info text-2xl md:text-2xl"><i class="bi bi-threads"></i></div>
          <div class=" flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li><a class="btn btn-ghost text-lg">Contact me</a></li>
              <li><a class="btn btn-ghost text-lg">my Works</a></li>
              <li><a class="btn btn-ghost text-lg">blog</a></li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <RouterView/>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-52 min-h-full BG">
          <!-- Sidebar content here -->
              <li><a class="btn btn-ghost">Home</a></li>
              <li><a class="btn btn-ghost">my Works</a></li>
              <li><a class="btn btn-ghost">blog</a></li>
        </ul>
      </div>
    </div>
    <Footer/>
</template>
<script setup lang="ts">
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>