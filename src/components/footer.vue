<template>
  <v-footer
    id="footer"
    app absolute
    class="flex-center"
  >
    <div id="footer__wrapper">
      <aside class="flex-center mb-4" style="gap: 15px;">
        <v-btn
          v-for="(item, i) in socials"
          :key="i"
          icon
          size="40"
          :icon="item.icon"
          :href="item.to"
          target="_blank"
          color="rgba(255, 255, 255, .4)"
          :style="`--hover-color: ${item.hover}`"
        >
          <img v-if="item.img" :src="item.img" style="width: 21px;">
          <v-icon v-else :icon="item.icon" color="#fff" />
        </v-btn>
      </aside>

      <h6 class="text-center">Copyright © 2022 Grupo NapoleoN. All Rights Reserved.</h6>
    </div>
  </v-footer>
</template>

<script setup>
import discordImg from '@/assets/sources/icons/discord-white.svg'
import variables from '@/mixins/variables';
const
  { discordLink, twitterLink, instagramLink } = variables,

socials = [
  {
    img: discordImg,
    name: "discord",
    hover: "#5662f6",
    to: discordLink
  },
  {
    icon: "mdi-twitter",
    name: "twitter",
    hover: "#2ea5ed",
    to: twitterLink
  },
  {
    icon: "mdi-instagram",
    name: "instagram",
    hover: "#b12f80",
    to: instagramLink
  },
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

#footer {
  transition: 0.5s $ease-return;
  background-color: transparent;
  @extend .margin-global;

  &__wrapper {
    @extend .parent;
  }

  .v-btn:hover { background-color: var(--hover-color) !important }
}
</style>
