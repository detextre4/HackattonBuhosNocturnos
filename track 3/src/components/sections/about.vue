<template>
  <section id="about">
    <text-title
      :text="$t('about.textTitle')"
      :bg-text="$t('about.bgTextTitle')"
    />

    <div id="about__content" class="flex-center flex-wrap" style="gap: clamp(30px, 5vw, 80px);">
      <img id="about-img" src="@/assets/sources/miscellaneous/IMG-9719.png">

      <aside class="flex-column">
        <h2 class="text-center text-md-start" v-html="$t('about.title')" />
        <p class="text-center text-md-start" v-html="$t(`about.desc`)" />
        <v-btn
          height="51.59"
          class="text-white mx-auto ml-md-0 px-7 custom-elevation"
          append-icon="mdi-chevron-right"
          :href="discordLink"
          target="_blank"
        >{{ $t('about.btn') }}</v-btn>
      </aside>
    </div>
  </section>
</template>

<script setup>
import variables from '@/mixins/variables';

const { discordLink } = variables
</script>

<style lang="scss">
#about {
  &-img {
    width: min(100%, 516px);
    border-radius: 30px;
    box-shadow: 2px 2px 6px 0px rgb(0, 0, 0, .2);
  }

  &__content {
    aside {
      max-width: 660px;
      @media (min-width: 1180px) and (max-width: 1200px) { width: 470px; }
    }

    .v-btn {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>