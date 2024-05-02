<script setup>
import HelloWorld from "./components/TheWelcome.vue";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <main>
    <HelloWorld />
  </main>
</template>

<style scoped></style>
