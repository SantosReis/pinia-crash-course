<script setup>
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
// const { isAuthenticated, user } = useAuthStore();//does not work seamlessly to remove user attributes
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
</script>
<template>
  <div v-if="isAuthenticated">User name is: {{ user.name }}</div>
  <h2>Welcome</h2>
  <Counter />
</template>
