import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
    async login() {
      const res = await fetch("https://reqres.in/api/users/2");
      const { data } = await res.json();
      // console.log(data);
      this.user = data;
      this.isAuthenticated = true;
    },
  },
});
