
import { effectScope, ref } from "vue"


/**
 * createPinia
 * 默认是一个插件，具备一个 install 方法
 * _s 用来储存 id - store
 * _e 用来停止所有的 store
 * state 用来储存所有状态
 */

export function createPinia () {

  const scope = effectScope();
  const state = scope.run(() => ref({}))

  return  {
    _s: new Map(),
    _e: scope,
    state,
    install: () => {

      
    }
  }

};