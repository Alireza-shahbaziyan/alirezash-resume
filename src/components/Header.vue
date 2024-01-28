<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore()
const user = store.$state.user




</script>
<template>
    <div class="BG w-full md:min-h-screen flex flex-col justify-center items-center">
        <div class="md:w-2/3 lg:w-9/12 w-11/12 md:h-auto md:pt-auto h-96 pt-40">
            <div class="w-full md:w-auto">
                <h1 class="text-5xl md:text-6xl lg:text-7xl text-center FONT-BOLD">{{ user?.name }} <span class="md:inline-block">{{ user?.lastName }}</span></h1>
                <h3 class="text-2xl TEXT-COLOR p-2 md:text-5xl text-center FONT-BOLD">{{ user?.position }} Developer</h3>
            </div>
            <div class="p-2 text-gray-400 text-base md:text-2xl text-center">{{user?.about}}</div>
        </div>
        <div class="flex my-10 p-4 md:h-auto md:pt-auto h-75">
            <button
                class="m-2 md:text-lg hover:bg-sky-200 hover:text-slate-700 BTN-COLOR h-10 w-32 md:h-14 md:w-44 rounded-full ">Book
                a Call <i class="hover:pl-1 bi bi-arrow-right"></i></button>
            <button
                class="m-2 md:text-lg hover:bg-sky-200 hover:text-slate-700 border border-white md:h-14 h-10 w-32 md:w-44 rounded-full ">Let's
            Talk <i class="hover:pl-1 bi bi-arrow-right"></i></button>
    </div>
    <div class="w-10/12 hidden md:inline-block">
        <div class="divider mt-12 ">
            <img class=" md:w-6" src="../../public/typescript.png" alt="typescript">
            +<img class="md:w-6" src="../../public/Vue.js_Logo_2.svg" alt="vue-js">
            +<img class="md:w-6" src="../../public/Tailwind_CSS_Logo.svg" alt="Tailwind">
        </div>
      </div>
</div>
</template>
<style scoped>
.divider:before{
    background-color: #9BA3AF;
}
.divider:after{
    background-color: #9BA3AF;
}
</style>