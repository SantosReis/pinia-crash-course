<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
console.log(store.count);
</script>
<template>
  <h2>Welcome</h2>
</template>
