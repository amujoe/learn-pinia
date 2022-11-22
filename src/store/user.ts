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
      return this.doubleAge;
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
    /**
     * 最简单的调用
     */
    addAge() {
      // action 可以通过 this 直接使用 state 的值
      this.age ++
    },
    /**
     * 1.action 支持传参
     */
    addAgeNum(num: number) {
      this.age += num
    },
    /**
     * 2.action 支持异步任务
     */
    addAgeAsync(num:number) {
      setTimeout(() => {
        this.age += num
        }, 2000)
    },
    /**
     * 3.action 可以调用别的 store 里的 action
     */
    useMainAction() {
      const main = MainInfo();
      main.addCount(1)
    }
  }
  // 
})