<template>
  <v-navigation-drawer
    id="drawer"
    v-model="store.state.drawer"
    class="py-8 px-2"
    disable-resize-watcher
    :class="{ active: store.state.drawer}"
  >
    <v-list nav>
      <div class="flex-center">
        <img
          src="@/assets/sources/images/logo_gonden_elf.png"
          alt="logo_gonden_elf logo"
        >
      </div>
    </v-list>

    <v-divider thickness="2" class="text-white mx-3 mb-4" />

    <v-list nav>
      <v-list-item
        v-for="(item, i) in store.state.navbarTabs" :key="i"
        :href="`#${item.name}`"
        :title="$t(`navbar.${item.name}`)"
        :active="item.active"
        class="text-white text-center"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>

<style scoped lang="scss">
#drawer {
  background-image: linear-gradient(#111, #000);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 200px;
    border-radius: 0 0 20px 20px;
    background-color: #ffffff34;
    filter: blur(100px);
    scale: 0;
    transition: .2s ease;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 7px;
    border-radius: 20px 20px 0 0;
    background-color: #ffffff5d;
    filter: blur(15px);
    scale: 0;
    transition: .2s ease;
  }

  &.active::before,
  &.active::after { scale: 1 }

  .v-list-item {
    &-title { font-size: 15px }
  }
}
</style>
