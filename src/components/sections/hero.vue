<template>
  <section id="hero" class="flex-center flex-wrap-reverse" style="--gap: clamp(30px, 5vw, 80px)">
    <aside class="hero-images">
      <div id="hero-img-1">
        <img src="@/assets/sources/collections/elf_1.jpg" data-depth="0.2">
      </div>
      
      <div id="hero-img-2">
        <img id="hero-img-2" src="@/assets/sources/collections/elf_2.jpg" data-depth="0.3">
      </div>

      <div id="hero-img-3">
        <img id="hero-img-3" src="@/assets/sources/collections/elf_10.jpg" data-depth="0.1">
      </div>
    </aside>

    <aside style="max-width: 660px;">
      <h1 v-html="$t('hero.title')" />
      <p v-html="$t(`hero.desc`, {
        twitter: twitterLink,
        instagram: instagramLink,
      })" />
      <h6 class="mb-0 text-primary">{{ $t('hero.accent') }}</h6>
    </aside>
  </section>
</template>

<script setup>
import Parallax from 'parallax-js'
import variables from '@/mixins/variables';
import { onMounted } from 'vue'

const
  { twitterLink, instagramLink } = variables


onMounted(() => {
  const scene1 = document.querySelector('#hero-img-1')
  const scene2 = document.querySelector('#hero-img-2')
  const scene3 = document.querySelector('#hero-img-3')
  new Parallax(scene1, { relativeInput: true });
  new Parallax(scene2, { relativeInput: true });
  new Parallax(scene3, { relativeInput: true });
})
</script>

<style lang="scss">
#hero {
  gap: var(--gap);
  height: calc(100dvh - var(--h-navbar));

  > * { flex: 1 1 calc(50% - var(--gap)) }

  .hero-images {
    position: relative;
    min-width: 290px;
    max-width: 500px;
    height: 300px;
    flex-basis: 450px;

    img {
      width: min(100%, 220px);
      border-radius: 20px;
      box-shadow: 3px 3px 8px 0px rgb(0, 0, 0, .2);
    }
  }

  &-img-1 {
    position: absolute;
    top: 0;
    left: 50px;
  }
  &-img-2 {
    position: absolute;
    top: 100px;
    left: 0;
  }
  &-img-3 {
    position: absolute;
    top: 50px;
    left: 250px;
  }
}
</style>
