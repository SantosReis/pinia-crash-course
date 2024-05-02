<template>
  <div>
    <button @click="increment">+</button>
    Count Value: {{ store.count }}
    <button @click="decrement">-</button>
    <br />
    Counter moved to {{ countDigitLength }} digital length
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();

function increment() {
  store.count++;
}
function decrement() {
  store.count--;
}

const countDigitLength = store.count.toString().length; //not reactive, not sync with state changes
</script>
