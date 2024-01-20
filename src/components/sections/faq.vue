<template>
  <section id="faq" class="mb-16">
    <text-title
      :text="$t('faq.textTitle')"
      :bg-text="$t('faq.bgTextTitle')"
    />

    <div id="faq__content" class="d-flex flex-wrap-reverse" style="gap: 20px;">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item, i) in faqs"
          :key="i"
          :title="item.question"
          :text="item.answer"
          bg-color="transparent"
          elevation="0"
        />
      </v-expansion-panels>

      <div class="d-flex flex-center">
        <img src="@/assets/sources/images/faq.png" alt="faq image">
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'

const
  i18n = useI18n(),

faqs = computed(() => i18n.messages.value[i18n.locale.value].faq.faqs)
</script>

<style lang="scss">
#faq {
  &__content > * { flex: 1 1 386px }

  .v-expansion-panels {
    height: max-content;
    
    .v-expansion-panel {
      &-title {
        font-size: 18px;
        color: #FAFAFA99;

        .v-icon { font-size: 30px }
      }

      &-text__wrapper {
        font-size: 16px;
        color: #DEE3E4;
      }

      &::after {
        background-color: #FAFAFA99;
        opacity: .4;
      }

      &--active {
        .v-expansion-panel-title { color: #fff }
      }
    }
  }

  img {
    width: min(100%, 29.1875em);
  }
}
</style>
