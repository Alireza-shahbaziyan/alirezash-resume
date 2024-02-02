<template>
<div class="flex flex-col justify-center w-screen items-center mt-16 overflow-hidden bg-white md:hidden">
  <div class="TEXT-COLOR-DARK text-2xl p-4 FONT-BOLD">Skills</div>
    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <div class="w-full h-full flex flex-col justify-center items-center text-center backdrop-blur-3xl bg-sky-900">
            <img class="w-32 h-32 rounded-lg" src="../../public/typescript.png" alt="IMAGE">
            <div class="mt-4 mb-3">
                    <div class="text-2xl FONT-BOLD">TypeScript</div>
            </div>
            <div class="text-sm p-4">TypeScript is a programming language that extends JavaScript by adding static types. It helps catch errors during development and improves code quality.</div>
        </div>
    </swiper-slide>

    <swiper-slide>
      <div class="w-full h-full flex flex-col justify-center items-center text-center backdrop-blur-3xl bg-cyan-900">
          <img class="w-32 h-32 rounded-lg" src="../../public/Vue.js_Logo_2.svg" alt="IMAGE">
          <div class="mt-4 mb-3">
                  <div class="text-2xl FONT-BOLD">Vue.js</div>
          </div>
          <div class="text-sm p-4">Vue.js is a JavaScript framework for building user interfaces. It's great for creating interactive and reactive web applications</div>
      </div>
  </swiper-slide>

  <swiper-slide>
    <div class="w-full h-full flex flex-col justify-center items-center text-center backdrop-blur-3xl bg-blue-900">
        <img class="w-32 h-32 rounded-lg" src="../../public/Tailwind_CSS_Logo.svg" alt="IMAGE">
        <div class="mt-4 mb-3">
                <div class="text-2xl FONT-BOLD">Tailwindcss</div>
        </div>
        <div class="text-sm p-4">Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.</div>
    </div>
</swiper-slide>


<swiper-slide>
  <div class="w-full h-full flex flex-col justify-center items-center text-center backdrop-blur-3xl bg-yellow-500">
      <img class="w-32 h-32 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png" alt="IMAGE">
      <div class="mt-4 mb-3">
              <div class="text-2xl FONT-BOLD">Other Front-end Developer skills</div>
      </div>
      <div class="text-sm p-4">HTML /CSS /JavaScript : Strong foundation in the core web technologies for building and styling web pages.

      </div>
  </div>
</swiper-slide>

  </swiper>
</div>
  </template>



  <script lang="ts">
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-cards';

  
    // import required modules
    import { EffectCards } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectCards],
        };
      },
    };
  </script>
  


<style scoped>
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

  .swiper {
    width: 80%;
    height: 70vh;
  }   

</style>