<template>
  <section id="history" class="mb-16">
    <text-title
      :text="$t('history.textTitle')"
      :bg-text="$t('history.bgTextTitle')"
    />

    <div id="history__content" class="flex-center flex-wrap" style="gap: clamp(30px, 5vw, 80px);">
      <img id="history-img" src="@/assets/sources/miscellaneous/IMG-9719.png">

      <aside class="flex-column">
        <h2 class="text-center text-md-start" v-html="$t('history.title')" />
        <p class="text-center text-md-start" v-html="$t(`history.desc`)" />
        <v-btn
          height="51.59"
          class="text-white mx-auto ml-md-0 px-7 custom-elevation"
          append-icon="mdi-chevron-right"
          :href="discordLink"
          target="_blank"
        >{{ $t('history.btn') }}</v-btn>
      </aside>
    </div>
  </section>
</template>

<script setup>
import variables from '@/mixins/variables';

const { discordLink } = variables
</script>

<style lang="scss">
#history {
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