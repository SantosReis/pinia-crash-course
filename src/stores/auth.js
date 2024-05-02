import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Marcus",
      email: "marcus@mai.com",
    },
  }),
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
    login() {
      this.$patch((state) => {
        this.$reset();
      });
    },
  },
});
