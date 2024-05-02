<script setup>
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
</script>
<template>
  <div v-if="isAuthenticated">
    User name is: {{ user.first_name }} {{ user.last_name }}
  </div>
  <h2>Welcome</h2>
  <Counter />
</template>
