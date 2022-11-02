import { defineStore } from "pinia"; 

export const MainInfo = defineStore("main", {
  // 生命state
  state: () => ({
    count: 88,
    name: "main"
  }),
  getters: {
    countValue(state) {
      return state.count // 必须要写 return
    },
  },
  actions: {
    /**
     * action 传参使用
     */
    addCount(num: number){
      console.log("addCount -", num)
      // setTimeout(() => {
        return this.count += num
      // }, 2000)
    }
  }
  // 
})
