<script setup>
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>
<template>
  User name is: {{ authStore.user.name }}
  <h2>Welcome</h2>
  <Counter />
</template>
