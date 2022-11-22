<template>
    <div class="home">
        <h3>Page Counter </h3>
        <h4>store.count:{{store.count}}</h4>
        <h4>countNew: {{countNew}}</h4>

        <h4 @click="reset">reset</h4>
        <h4 @click="change">change</h4>
        <h4 @click="replace">replace</h4>
    </div>

</template> 
<script setup lang="ts">
import { computed } from 'vue'
import { mapState } from 'pinia';
import { Counter } from "@/store/counter"

const store = Counter()

store.count++

// 重置
const reset = () => {
  store.$reset()
}

// 修改
const change = () => {
  store.$patch({
    count: store.count + 1
  })
}

// 替换
const replace = () => {
  store.$state = { count: 24 }
}

// computed
const countNew = computed(() => {
  const a = mapState(Counter, ['count'])
  return a.count() + 1
})

</script>
