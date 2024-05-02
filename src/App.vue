<script setup>
import HelloWorld from "./components/TheWelcome.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <main>
    <button @click="authStore.logout" v-if="authStore.isAuthenticated">
      Logout
    </button>
    <button @click="authStore.login" v-else>Logout</button>
    <HelloWorld />
  </main>
</template>

<style scoped></style>
