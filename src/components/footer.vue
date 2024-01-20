<template>
  <v-footer
    id="footer"
    app absolute
    class="flex-center"
    height="300"
  >
    <div id="footer__wrapper">
      <aside class="d-flex flex-center mb-10" style="gap: 20px;">
        <v-btn
          v-for="(item, i) in socials"
          :key="i"
          icon
          size="52"
          :icon="item.icon"
          :href="item.to"
          target="_blank"
          color="#5F6267"
          :style="`--hover-color: ${item.hover}`"
        >
          <img v-if="item.img" :src="item.img" style="width: 28px;">
          <v-icon v-else :icon="item.icon" color="#fff" size="25" />
        </v-btn>
      </aside>

      <h6 v-html="$t('footer.copy', { link: napoleonGroupLink })" class="text-center w500" />
    </div>
  </v-footer>
</template>

<script setup>
import discordImg from '@/assets/sources/icons/discord-white.svg'
import variables from '@/mixins/variables';
const
  { discordLink, twitterLink, instagramLink, napoleonGroupLink } = variables,

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
  width: 100%;
  @extend .margin-global;

  &__wrapper {
    @extend .parent;
  }

  h6 {
    color: #FAFAFACC;
  }

  .v-btn:hover { background-color: var(--hover-color) !important }
}
</style>
