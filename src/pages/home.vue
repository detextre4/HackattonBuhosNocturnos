<template>
  <div id="home">
    <hero />
    <about />
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
import About from '@/components/sections/about.vue'
import RoadMap from '@/components/sections/road-map.vue'
import Collection from '@/components/sections/collection.vue'
import Benefits from '@/components/sections/benefits.vue'
import Faq from '@/components/sections/faq.vue'
import Join from '@/components/sections/join.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { mapRanged } from '@/plugins/functions'
import { useStore } from 'vuex'
const
  store = useStore()

function updateNavbarColors(_) {
  const value = mapRanged(document.documentElement.scrollTop, { fromMin: 0, fromMax: 100, toMin: 0, toMax: 1 }),
  valueInverted = mapRanged(document.documentElement.scrollTop, { fromMin: 0, fromMax: 100, toMin: 0, toMax: 1, invert: true }),
  navbar = document.querySelector('#navbar')

  navbar.style.backgroundColor = `rgba(17, 17, 17, ${value})`
  navbar.style.setProperty('--opacity-line', valueInverted)
  
  const children = document.querySelectorAll('#home > *'),
  targets = [...children.values()]
  targets.pop()
  
  const scrollPaddingTop = 100,
  viewportTop = document.documentElement.scrollTop + scrollPaddingTop;

  const intersectedElement = targets.find(el => {
    const elementTop = el.offsetTop,
    elementBottom = elementTop + el.offsetHeight;

    return viewportTop >= elementTop && viewportTop <= elementBottom;
  });
  
  if (intersectedElement) store.commit('setNavbarTabs', intersectedElement.id);
}

onMounted(() => {
  window.addEventListener('scroll', updateNavbarColors)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateNavbarColors)
})
</script>
