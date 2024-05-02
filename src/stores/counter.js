import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 10 }),
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
