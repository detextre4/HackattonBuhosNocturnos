<template>
  <v-btn
    v-if="showFloatingBtn"
    id="floating-action-button"
    href="#hero"
    icon="mdi-chevron-up"
    class="text-white anim-moveup"
  />

  <div id="home">
    <hero v-intersect="updateFloatingBtn" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { mapRanged } from '@/plugins/functions'
import { useStore } from 'vuex'
const
  store = useStore(),

showFloatingBtn = ref()

onMounted(() => {
  window.addEventListener('scroll', updateNavbar)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateNavbar)
})


function updateNavbar(_) {
  // update Navbar Colors
  const value = mapRanged(document.documentElement.scrollTop, { fromMin: 0, fromMax: 100, toMin: 0, toMax: 1 }),
  valueInverted = mapRanged(document.documentElement.scrollTop, { fromMin: 0, fromMax: 100, toMin: 0, toMax: 1, invert: true }),
  navbar = document.querySelector('#navbar')

  navbar.style.backgroundColor = `rgba(17, 17, 17, ${value})`
  navbar.style.setProperty('--opacity-line', valueInverted)
  
  // update Navbar selected
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

function updateFloatingBtn(isIntersecting, entries, observer) {
  showFloatingBtn.value = !isIntersecting
}
</script>
