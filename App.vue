<script setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/Loader.vue';

const isLoading = ref(true);

onMounted(() => {
  // Simulate a loading process
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Adjust the timeout as needed
});
</script>

<template>
  <q-layout>
    <LoadingSpinner :isLoading="isLoading" />
    <router-view />
  </q-layout>
</template>