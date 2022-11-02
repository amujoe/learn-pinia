<template>
    <div class="home">
        <h3>Welcome to the BangZhu's Class</h3>
        <h4>Sit down if you like, and go out if you don't like</h4>
        <h4>Let‘s Go</h4>
    </div>

</template> 
<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { UserInfo } from "@/store/user"
import { MainInfo } from "@/store/main"

// 第二种方式解构 user
const { name, age, userMainInfo} = storeToRefs(UserInfo())

// 三种方式 拿到 main 里的值
const { count, addCount } = MainInfo();
const mainOne = MainInfo();
const mainTwo = storeToRefs(MainInfo());

/**
 * 重置
 */
const reset = () => {
    // main 恢复默认的值
    mainOne.$reset()
}

/**
 * 替换 state
 */
const replace = () => {
    // main 恢复默认的值
    mainOne.$reset()
    mainOne.$state = { count: 666, name: 'Paimon' }
}

/**
 * 订阅 State
 * 当组件被卸载时，它们将被自动删除。如果你想在组件卸载后保留它们，传递{ detached: true }
 */
mainOne.$subscribe((mutation, state) => {
    console.log("subscribe - mutation", mutation)
    // mutation.type // 'direct' | 'patch object' | 'patch function'
    // mutation.storeId // 'cart'
    // // only available with mutation.type === 'patch object'
    // mutation.payload // patch object passed to cartStore.$patch()
    console.log("subscribe - state", state)
}, { detached: true }) 


/**
 * 订阅 onAction
 */
mainOne.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

</script>
