<script setup lang="ts">
import Header from '@/components/Header.vue';
import GrowthPartner from '@/components/GrowthPartner.vue';
import Footer from '@/components/Footer.vue';
import Testimonials from '@/components/Testimonials.vue';
import WebsiteProjects from '@/components/WebsiteProjects.vue';
import RecentPosts from '@/components/RecentPosts.vue';
import HelpYou from '@/components/HelpYou.vue'
</script>

<template>
  <main class="w-full">
    <Header/>
    <GrowthPartner/>
    <Testimonials/>
    <WebsiteProjects/>
    <RecentPosts/>
    <HelpYou/>
    <Footer/>
  </main>
</template>
