import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 10 }),
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
  actions: {
    increment() {
      const auth = useAuthStore();
      if (!auth.isAuthenticated) return;
      this.count++;
    },
    decrement() {
      const auth = useAuthStore();
      if (!auth.isAuthenticated) return;
      this.count--;
    },
  },
});
