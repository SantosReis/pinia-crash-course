import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Marcus",
      email: "marcus@mai.com",
    },
  }),
});
