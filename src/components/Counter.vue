<template>
  <div>
    <button @click="counterStore.increment">+</button>
    Count Value: {{ count }}
    <button @click="counterStore.decrement">-</button>
    <br />
    Counter moved to {{ countDigitLength }} digital length
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
import { computed } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
// const store = useCounterStore();
const counterStore = useCounterStore();
const { count, countDigitLength } = storeToRefs(counterStore);

// function increment() {
//   store.count++;
// }
// function decrement() {
//   store.count--;
// }

// const countDigitLength = computed(() => store.count.toString().length);
</script>
