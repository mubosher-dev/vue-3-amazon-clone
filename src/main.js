import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.jsx";
import { createStore } from "vuex";
const app = createApp(App);

app.use(router);

const store = createStore({
  state: {
    basket: [],
    totalPrice: 0,
    user: [],
  },
  mutations: {
    addToBusket(state, payload) {
      let obj = {
        id: payload.id,
        description: payload.desc,
        price: payload.price,
        rating: payload.rating,
        imgUrl: payload.imgUrl,
      };
      state.basket.push(obj);
      state.totalPrice = state.basket.reduce(
        (amount, item) => item.price + amount,
        0
      );
    },
    removeToBusket(state, payload) {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === payload
      );
      state.basket.splice(index, 1);
      state.totalPrice = state.basket.reduce(
        (amount, item) => item.price + amount,
        0
      );
    },
  },
});


app.use(store);
app.mount("#app");
