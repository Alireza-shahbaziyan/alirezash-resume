<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore()
store.getUserData()

</script>

<template>
    <div style="height: 85vh;" class="BG w-full flex flex-col justify-center items-center ">
        <div class="md:w-2/3 lg:w-9/12 w-11/12 md:h-auto md:pt-auto ">
            <div class="w-full md:w-auto">
                <h1 class="text-5xl md:text-6xl lg:text-7xl text-center FONT-BOLD">{{ store?.$state.user?.name }} <span class="md:inline-block">{{ store?.$state.user?.lastName }}</span></h1>
                <h3 class="text-2xl text-info p-2 md:text-5xl text-center FONT-BOLD">{{ store?.$state.user?.position }} Developer</h3>
            </div>
            <div class="p-2 text-gray-400 text-base md:text-2xl text-center">{{store.$state.user?.about}}</div>
        </div>
        <div class="flex md:flex-row flex-col my-10 p-4 md:h-auto md:pt-auto h-75">
            <a class="rounded-full sm:btn-sm md:btn-md lg:btn-lg btn btn-info text-white m-2">Book a Call<i class="bi bi-arrow-right"></i> </a>
            <a class="rounded-full sm:btn-sm md:btn-md lg:btn-lg btn btn-ghost border border-white m-2 text-white">My Work<i class="bi bi-arrow-right"></i> </a>
    </div>
    <div class="w-full md:w-10/12 text-xs">
        <div class="divider mt-12 text-gray-400">
            Proficient in the most modern tools
        </div>
      </div>
    </div>
</template>

<style scoped>
.divider:before{background-color: #9BA3AF;}
.divider:after{background-color: #9BA3AF;}
</style>