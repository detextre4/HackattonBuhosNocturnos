<template>
  <div id="home" class="fill-height flex-center">
    <v-responsive class="align-center text-center pb-4">

      <div class="text-body-1 font-weight-light mb-n1">Welcome to</div>
      <h1 class="text-h1 font-weight-bold">Vuetify</h1>
      <h2 v-font="[16, 3.5]" class="py-5">{{name}}</h2>

      <v-btn
        class="bg-primary text-white"
        rounded @click="anything"
      >Do Anything!</v-btn>
    </v-responsive>
  </div>
</template>

<script setup>
import '@/assets/styles/pages/home.scss'
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import ToastTitle from '@/components/toast-content/toast-title.vue';
const
  toast = useToast(),

name = ref("detextre4")


function anything() {
  toast.success({
    component: ToastTitle,
    props: {
      title: "Do anything",
      desc: "powered by detextre4"
    }
  })
}
</script>
