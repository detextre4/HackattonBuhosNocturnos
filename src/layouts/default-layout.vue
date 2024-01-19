<template>
  <v-app id="layout">
    <v-main>
      <Home />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import '@/assets/styles/layouts/default-layout.scss'
import Home from '@/pages/landing/home.vue'
import Drawer from '@/components/drawer.vue'
import Footer from '@/components/footer.vue'
</script>
