<template>
  <nav id="navbar" class="flex-center">
    <div id="navbar__wrapper" class="d-flex justify-space-between">
      <img class="logo" src="@/assets/sources/images/logo_gonden_elf.svg" alt="logo_gonden_elf logo">

      <aside class="d-md-flex flex-center d-none" style="gap: 20px;">
        
        <a
          v-for="(item, i) in store.state.navbarTabs"
          :key="i"
          :href="`#${item.name}`"
          class="hover-split"
          :class="{ active: item.active }"
        >{{ $t(`navbar.${item.name}`) }}
          <span v-for="n in 2" :key="n" class="mask"><span>{{ $t(`navbar.${item.name}`) }}</span></span>
        </a>
      </aside>

      <aside class="flex-center ml-3" style="gap: 10px;">
        <v-btn
          :href="discordLink"
          target="_blank"
          class="bg-white"
          height="40"
          style="font-size: 16px;"
        >
          <img src="@/assets/sources/icons/discord.svg" alt="discord icon" class="mr-2" style="width: 21px;">
          Discord
        </v-btn>

        <v-menu offset="20">
          <template #activator="{ props }">
            <v-img-load
              v-bind="props"
              :src="languages.find(e => e.key == language).icon"
              :alt="`${languages.find(e => e.key == language).name} flag`"
              width="40"
              height="40"
              class="pointer"
            />
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in languages" :key="i" @click="changeLanguage(i)">
              <span class="flex-acenter text-white" style="gap: 5px;">
                <v-img-load
                  :src="item.icon"
                  :alt="`${languages[i].name} flag`"
                  style="max-width: 40px;"
                  width="40"
                  height="40"
                />
                {{ item.name }}
              </span>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          icon
          size="38"
          class="d-md-none bg-white"
          @click="store.commit('setDrawer', true)"
        >
          <v-icon icon="mdi-menu" size="20" />
        </v-btn>
      </aside>
    </div>
  </nav>
</template>

<script setup>
import EspIcon from '@/assets/sources/images/es.png'
import EnIcon from '@/assets/sources/images/en.png'
import { useI18n } from 'vue-i18n';
import { useStorage } from 'vue3-storage-secure';
import { storageSecureCollection } from '@/plugins/vue3-storage-secure'
import { ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import variables from '@/mixins/variables';
const
  store = useStore(),
  storage = useStorage(),
  i18n = useI18n(),
  { discordLink } = variables,

language = ref('en'),
languages = [
  {
    key: "es",
    icon: EspIcon,
    name: "Español",
  },
  {
    key: "en",
    icon: EnIcon,
    name: "English",
  },
]


onBeforeMount(() => {
  language.value = storage.getStorageSync(storageSecureCollection.language) ?? 'en'
})


function changeLanguage(index) {
  const lang = languages[index].key
  language.value = lang
  storage.setStorageSync(storageSecureCollection.language, lang)
  i18n.locale.value = lang
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

#navbar {
  animation: movedown .5s $ease-return;
  transition: transform 0.4s ease-in-out, background-color .2s ease;
  @extend .margin-global;
  @extend .full-screen;
  height: var(--h-navbar);
  position: sticky;
  top: 0;
  z-index: 99;
  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 1px;
    width: 90%;
    border-radius: 30px;
    opacity: var(--opacity-line);
  }

  &__wrapper {
    @extend .parent;

    a {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }

  .logo { width: 60px }
}
</style>
