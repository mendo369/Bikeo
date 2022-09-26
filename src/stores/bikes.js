import { defineStore } from "pinia";

export const useBikesStore = defineStore({
  id: "bikes",
  state: () => ({
    bikes: [],
    bike: {},
  }),
  getters: {
    getBikes(state) {
      return state.bikes;
    },
    getBike(state) {
      return state.bike;
    },
  },
  actions: {
    async fetchBikes() {
      const data = await fetch("http://localhost:3000/bikes").then((res) =>
        res.json()
      );

      this.bikes = data;
    },

    async fetchBike(id) {
      const data = await fetch(`http://localhost:3000/bikes/${id}`).then(
        (res) => res.json()
      );

      this.bike = data[0];
    },
  },
});
