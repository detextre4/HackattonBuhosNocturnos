<template>
  <div id="home">
    <hero />
    <history />
    <collection />
  </div>
</template>

<script setup>
import '@/assets/styles/pages/home.scss'
import Hero from '@/components/sections/hero.vue'
import History from '@/components/sections/history.vue'
import Collection from '@/components/sections/collection.vue'
</script>
