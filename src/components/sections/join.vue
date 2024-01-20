<template>
  <section id="join">
    <text-title
      :bg-text="$t('join.bgTextTitle')"
    />

    <v-sheet class="bg-primary pa-12 d-flex flex-column-center" style="border-radius: 30px;">
      <img src="@/assets/sources/icons/discord-white.svg" alt="discord logo" style="width: 75px;">
      <h2 class="text-center w600">{{ $t('join.title') }}</h2>
      <v-btn
        height="51.59"
        :href="discordLink"
        target="_blank"
        class="bg-white px-10 w500 custom-elevation"
        style="font-size: 16px;"
      >{{ $t('join.btn') }}</v-btn>

      <img
        src="@/assets/sources/miscellaneous/IMG-9728.png"
        alt="qrs image"
        class="mt-12 custom-elevation"
        style="width: min(100%, 516px); border-radius: 30px;"
      >
    </v-sheet>
  </section>
</template>

<script setup>
import variables from '@/mixins/variables';

const
  { discordLink } = variables
</script>
