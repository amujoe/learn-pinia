import { defineStore } from "pinia"; 

import { MainInfo } from "./main"

export const UserInfo = defineStore("user", {
  // 生命state
  // state: () => {
  //   return {
  //     name: "joe",
  //     age: 34
  //   }
  // }
  state: () => ({
    name: "joe",
    age: 36
  }),
  getters: {
    /**
     * 返回 state
     */
    doubleAge(state) {
      return state.age * 2 // 必须要写 return
    },
    /**
     * 使用已有的 getters
     */
    doubleAgePlus() {
      return this.doubleAge + 1;
    },
    /**
     * 给 getters 传参数进来
     */
    doubleAgeParams(state) {
      return (num: number) => {
        return num + state.age
      };
    },
    /**
     * 使用 main 里面的 state
     */
    userMainInfo(state) {
      const main = MainInfo()
      return main.count + state.age;
    }
  },
  actions: {
    addAge() {
      return this.age ++
    }
  }
  // 
})