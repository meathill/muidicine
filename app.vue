<script setup lang="ts">
import { ref } from 'vue';
import { initStore, useMedicineStore } from '@/store';
import ReloadPrompt from '@/components/reload-prompt.vue';
import type { Medicine } from '@/types';
import CurrentMedicine from '@/components/current-medicine.vue';
import { StoreDefinition } from 'pinia';
// import {registerServiceWorker} from './service/notification';

let medicineStore: StoreDefinition;

const currentMedicine = ref<Medicine | undefined>();

onBeforeMount(() => {
  initStore();
  medicineStore = useMedicineStore();
});

onMounted(() => {
  // registerServiceWorker();
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      currentMedicine.value = medicineStore.getCurrentMedicine();
    }
  });
  setInterval(() => {
    currentMedicine.value = medicineStore.getCurrentMedicine();
  }, 60000);
});
</script>

<template lang="pug">
vite-pwa-manifest

.container.mx-auto.h-full
  router-view

current-medicine(
  v-if="currentMedicine"
  :medicine="currentMedicine"
  @dismiss="currentMedicine = null"
)
reload-prompt
</template>
