<script setup>
import HelloWorld from "./components/TheWelcome.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

function logout() {
  //authStore.isAuthenticated = false; //works
  authStore.$state = { isAuthenticated: false //also works };
}
</script>

<template>
  <main>
    <button @click="logout">Logout</button>
    <HelloWorld />
  </main>
</template>

<style scoped></style>
