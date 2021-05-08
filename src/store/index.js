import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    showInputDialog: false,
    menuVisible: true,
    data: [],
    rawData: "",
    toVeco: true,
    lines: 2,
    mainCB: 0,
    size: "0"
  },
  mutations: {
    toggleMenuVisible(state) {
      state.menuVisible = !state.menuVisible;
    },
    toggleInputDialog(state) {
      state.showInputDialog = !state.showInputDialog;
    },
    setData(state) {
      const split = state.rawData.split("\n");
      state.data = split;
    }
  }
});

export default store;
