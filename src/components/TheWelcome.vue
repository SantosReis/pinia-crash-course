<script setup>
import { useCounterStore } from "@/stores/counter";
import Counter from "@/components/Counter.vue";
const store = useCounterStore();
console.log(store.count);
</script>
<template>
  <p>{{ store.count }}</p>
  <h2>Welcome</h2>
  <Counter :count="store.count" />
</template>
