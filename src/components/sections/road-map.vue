<template>
  <section id="road-map" class="mb-16">
    <text-title
      text="Golden Elf"
      bg-text="COLECCIÓN NFTS"
    />

    <div id="road-map__content">
      <template v-for="(img, i) in steps" :key="i">
        <span
          class="step-id"
          :class="i % 2 === 0 ? 'left' : 'right'"
          :style="`--row: ${i + 1}; --column: ${i % 2 === 0 ? 1 : 2};`"
        >{{ i + 1 }}</span>

        <img
          :src="img"
          :alt="$t(`roadMap.alt${i + 1}`)"
          class="step-img"
          :class="i % 2 === 0 ? 'right' : 'left'"
          :style="`--index: ${i + 1}; --column: ${(i + 1) % 2 === 0 ? 1 : 2}`"
        >
      </template>
    </div>
  </section>
</template>

<script setup>
import stepImg1 from '@/assets/sources/miscellaneous/IMG-9721.png'
import stepImg2 from '@/assets/sources/miscellaneous/IMG-9722.png'
import stepImg3 from '@/assets/sources/miscellaneous/IMG-9723.png'
import stepImg4 from '@/assets/sources/miscellaneous/IMG-9724.png'
import stepImg5 from '@/assets/sources/miscellaneous/IMG-9725.png'
const
steps = [stepImg1, stepImg2, stepImg3, stepImg4, stepImg5]
</script>

<style lang="scss">
#road-map {
  $accent: #0000004D;
  $width-line: 3.149375em;
  $width-circle: 0.375em;

  &__content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 428.5px;
    column-gap: calc(3em * 2 + #{$width-circle * 2});
    @media (max-width: 880px) {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      margin: auto;
      width: 4px;
      height: 100%;
      border-radius: 10px;
      background-color: $accent;
      @media (max-width: 880px) { display: none }
    }

    > * {
      grid-row: var(--row);
      grid-column: var(--column);
      @media (max-width: 880px) {
        grid-row: auto;
        grid-column: 1;
      }
    }

    .step-id {
      $size: clamp(100px, 10vw, 150px);
      @media (min-width: 1200px) { font-size: 3.5rem}
      font-size: calc(1.475rem + 2.7vw);
      font-weight: 600;
      color: rgb(var(--v-theme-primary));
      background-color: $accent;
      border-radius: 50%;
      display: grid;
      place-content: center;
      width: $size;
      height: $size;
      box-shadow: 1px 1px 15px 1px rgb(0, 0, 0, .15);
      margin-top: 24px;
      position: relative;
      &::before {
        font-size: var(--resizer);
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: $width-line;
        height: 4px;
        background-color: $accent;
      }

      &::after {
        font-size: var(--resizer);
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: $width-circle;
        height: $width-circle;
        background: #e5e5e6;
        box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        z-index: 1;
      }
    }
    .step-id.left {
      justify-self: flex-end;

      &::before { right: -$width-line }
      &::after { right: calc(#{$width-line + $width-circle} * -1) }
    }
    .step-id.right {
      &::before { left: -$width-line }
      &::after { left: calc(#{$width-line + $width-circle} * -1) }
    }

    .step-img {
      width: min(100%, 31.125em);
      height: 23.34375em;
      border-radius: 30px;
      align-self: flex-end;
      object-fit: cover;
    }
    .step-img.left {
      justify-self: flex-end;
      @media (max-width: 880px) {
        justify-self: flex-start;
        margin-top: 15px;
      }
    }
    .step-img.right {
      justify-self: flex-start;
      @media (max-width: 880px) {
        justify-self: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>
