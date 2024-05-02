<script setup>
import HelloWorld from "./components/TheWelcome.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

function logout() {
  //authStore.isAuthenticated = false;
  // authStore.$state = { isAuthenticated: false, user: {} };
  // authStore.$patch({ isAuthenticated: false, user: {} });
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}
</script>

<template>
  <main>
    <button @click="logout">Logout</button>
    <HelloWorld />
  </main>
</template>

<style scoped></style>
