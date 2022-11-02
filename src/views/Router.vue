<template>
    <div class="home">
        <h3>router Page</h3>
        <el-button @click="goAboutPage">Go About Page</el-button>
    </div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const route = useRouter();

/**
 * 跳转
 */
const goAboutPage = (() => {
    route.push({
        name: "a"
    })
})
</script>
