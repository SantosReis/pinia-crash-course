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

//hardcode login
function login() {
  // authStore.$reset();
  authStore.$patch((state) => {
    (state.isAuthenticated = true),
      (state.user = {
        name: "Marcus",
        email: "marcus@mai.com",
      });
  });
}
</script>

<template>
  <main>
    <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
    <button @click="login" v-else>Logout</button>
    <HelloWorld />
  </main>
</template>

<style scoped></style>
