<template>
  <div class="text-title mb-10">
    <span>{{ bgText ?? text }}</span>
    <h3 v-if="text" class="mb-0">{{ text }}</h3>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: undefined
  },
  bgText: {
    type: String,
    default: undefined
  },
})
</script>

<style lang="scss" scoped>
.text-title {
  display: grid;
  grid-template-areas: stack;
  place-content: center;
  > * { grid-area: stack }
  
  > span {
    @media (min-width: 1200px) { font-size: 8.25rem }
    font-size: calc(1.95rem + 8.4vw);
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.05);
  }

  > h3 {
    --fw: 500;
    position: relative;
    height: max-content;
    inset: 0;
    display: grid;
    place-content: center;
    align-self: center;
    justify-self: center;
    text-align: center;
    text-transform: none;
    color: #fff;
    isolation: isolate;

    &::after {
      content: "";
      position: absolute;
      background-color: rgb(var(--v-theme-primary));
      width: 80px;
      height: 3px;
      border-radius: 20px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      translate: 0 10px;
    }
  }
}
</style>
