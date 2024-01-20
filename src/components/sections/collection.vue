<template>
  <section id="collection" class="pt-16">
    <text-title
      :text="$t('collection.textTitle')"
      :bg-text="$t('collection.bgTextTitle')"
    />

    <v-slide-group :show-arrows="false" class="carousel">
      <v-slide-group-item v-for="(img, i) in carousel" :key="i">
        <v-img-load
          :src="img"
          max-width="13.9375em"
          sizes="13.9375em"
          rounded="20"
        />
      </v-slide-group-item>
    </v-slide-group>
    
    <v-slide-group :show-arrows="false" class="carousel">
      <v-slide-group-item v-for="(img, i) in carousel2" :key="i">
        <v-img-load
          :src="img"
          max-width="13.9375em"
          sizes="13.9375em"
          rounded="20"
        />
      </v-slide-group-item>
    </v-slide-group>
  </section>
</template>

<script setup>
import img1 from '@/assets/sources/collections/elf_1.jpg'
import img2 from '@/assets/sources/collections/elf_2.jpg'
import img3 from '@/assets/sources/collections/elf_3.jpg'
import img4 from '@/assets/sources/collections/elf_4.jpg'
import img5 from '@/assets/sources/collections/elf_5.jpg'
import img6 from '@/assets/sources/collections/elf_6.jpg'
import img7 from '@/assets/sources/collections/elf_7.jpg'
import img8 from '@/assets/sources/collections/elf_8.jpg'
import img9 from '@/assets/sources/collections/elf_9.jpg'
import img10 from '@/assets/sources/collections/elf_10.jpg'
import img11 from '@/assets/sources/collections/elf_11.jpg'
import img12 from '@/assets/sources/collections/elf_12.jpg'
import { onMounted } from 'vue'
const
carousel = [img1, img2, img3, img4, img5, img6],
carousel2 = [img7, img8, img9, img10, img11, img12]

onMounted(initialize)

function initialize() {
  console.log("todo here");
}
</script>

<style lang="scss">
#collection {
  .carousel {
    width: 100vw;
    margin-inline: calc(50% - 50vw);
    height: 16.4375em;
    padding-block: 1.25em;
    overflow: hidden;

    .v-slide-group__content {
      gap: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
