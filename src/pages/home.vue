<template>
  <div id="home">
    <hero />
    <history />
    <road-map />
    <collection />
    <benefits />
    <faq />
    <join />
  </div>
</template>

<script setup>
import '@/assets/styles/pages/home.scss'
import Hero from '@/components/sections/hero.vue'
import History from '@/components/sections/history.vue'
import RoadMap from '@/components/sections/road-map.vue'
import Collection from '@/components/sections/collection.vue'
import Benefits from '@/components/sections/benefits.vue'
import Faq from '@/components/sections/faq.vue'
import Join from '@/components/sections/join.vue'
</script>
