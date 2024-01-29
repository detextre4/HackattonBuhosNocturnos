<template>
  <section id="benefits" class="pt-16">
    <text-title
      :text="$t('benefits.textTitle')"
      :bg-text="$t('benefits.bgTextTitle')"
    />

    <div id="benefits__content" class="flex-space-center flex-wrap" style="gap: 20px;">
      <img src="@/assets/sources/miscellaneous/IMG-9726.png" alt="benefits img">

      <img src="@/assets/sources/miscellaneous/IMG-9726.png" alt="benefits img" class="ml-auto">
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
#benefits {
  img {
    width: min(100%, 516px);
    border-radius: 30px;
  }
}
</style>
