import { createStore } from "vuex";
import modal from "./modules/modal";
import iconModule from "./modules/iconModule";
export default createStore({
  modules: {
    modal,
    iconModule,
  },
});