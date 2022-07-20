import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import Flutterwave from "vue-flutterwave";

const app = createApp(App).use(store);

app.use(Flutterwave, {
  publicKey: "",
  currency: "NGN",
});
app.use(router);

app.mount("#app");
