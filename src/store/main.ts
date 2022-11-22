import { defineStore } from "pinia"; 
import { computed, ref } from 'vue';

export const MainInfo = defineStore("main", () => {

  const count = ref(20);
  const name =  "main";

  /**
   * actions 中的方法
   * @param num 
   */
  const addCount = (num: number) => {
    console.log("addCount -", num)
    // setTimeout(() => {
      count.value += num
    // }, 2000)
  }

  /**
   * 计算属性，实现 getters 
   */
  const doubleCount = computed(() => {
    return count.value * 2
  })

  return { count, name, doubleCount, addCount}
})
