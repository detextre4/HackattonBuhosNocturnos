<template>
  <v-app id="layout">
    <Drawer />

    <v-main>
      <Navbar />
      <Home />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import '@/assets/styles/layouts/default-layout.scss'
import Drawer from '@/components/drawer.vue'
import Navbar from '@/components/navbar.vue'
import Home from '@/pages/landing/home.vue'
import Footer from '@/components/footer.vue'
</script>
