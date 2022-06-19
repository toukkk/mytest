import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form'
import user from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    // fileList: [
    //   {
    //     name: "food.jpeg",
    //     url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    //   },
    //   {
    //     name: "food2.jpeg",
    //     url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/101",
    //   },
    // ],
    fileList: [
      {
        name: "1.jpeg",
        url: require("@/assets/image/1.jpeg"),
      },
      {
        name: "2.jpeg",
        url: require("@/assets/image/2.jpeg"),
      },
      {
        name: "3.jpeg",
        url: require("@/assets/image/3.jpeg"),
      },
      {
        name: "4.jpeg",
        url: require("@/assets/image/4.jpeg"),
      },
      {
        name: "5.gif",
        url: require("@/assets/image/5.gif"),
      },
    ],
  },
  getters: {
  },
  mutations: {
    searchVal(state, val) {
      state.search = val
    }
  },
  actions: {
  },
  modules: {
    form,
    user,
  }
})
