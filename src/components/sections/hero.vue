<template>
  <section id="hero" class="flex-center">
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
$media: 760px;

#hero {
  --gap: clamp(30px, 5vw, 80px);
  gap: var(--gap);
  height: calc(100dvh - var(--h-navbar));

  @media (max-width: $media) {
    --gap: 70px;
    flex-direction: column-reverse;
    height: auto;
    padding-block: 64px 0;
  }

  > * { flex: 1 1 calc(50% - var(--gap)) }

  .hero-images {
    position: relative;
    min-width: 290px;
    max-width: 31.25em;
    height: 18.75em;
    flex-basis: 28.125em;

    img {
      width: min(100%, 13.75em);
      border-radius: 20px;
      box-shadow: 3px 3px 8px 0px rgb(0, 0, 0, .2);
    }
  }

  &-img-1 {
    position: absolute;
    top: 0;
    left: 3.125em;
  }
  &-img-2 {
    position: absolute;
    top: 6.25em;
    left: 0;
  }
  &-img-3 {
    position: absolute;
    top: 3.125em;
    left: 15.625em;
    @media (max-width: $media) { left: 12.625em }
  }
}
</style>
