import Vue from 'vue';
import Vuex from 'vuex';
import sorting from './modules/sorting';
import products from "./modules/products";
import pagination from "./modules/pagination";
import modals from "./modules/modals";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  modules: {
    sorting: sorting,
    products: products,
    pagination: pagination,
    modals: modals,
  },
})
