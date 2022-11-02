<template>
    <div class="home">
        <h3>this is Home Page; Let's study the Pinia</h3>

        <h3 style="margin-top: 40px">第一种方式: userinfo()</h3>
        <h4>this is UserInfo.name : {{userInfo.name}}</h4>
        <h4>this is UserInfo.age : {{userInfo.age}}</h4>

        <h3 style="margin-top: 40px">第二种方式: storeToRefs(UserInfo())</h3>
        <h4>this is UserInfo.name : {{userInfoTwo.name}}</h4>
        <h4>this is UserInfo.age : {{userInfoTwo.age}}</h4>

        <h3 style="margin-top: 40px">第三种方式,解构 user storeToRefs(UserInfo())</h3>
        <h4>name: {{name}}</h4>
        <h4>age: {{age}} - doubleAge: {{doubleAge}} -- doubleAgePlus: {{doubleAgePlus}}</h4>

        <h4>getters 传参数的方式; doubleAgeParams(2): {{doubleAgeParams(2)}}</h4>
        <h4>在 user 中使用 main 的 state;  userMainInfo(): {{userMainInfo}}</h4>

        <h3 style="margin-top: 40px">改变 state.age 的值</h3>
        <h4 @click="userInfo.addAge()">调用 Action 添加 age</h4>
        <h4 @click="onAddAge">调用 onAddAge 添加 age</h4>
        <h4 @click="onAddAgeTwo">调用 onAddAgeTwo 添加 age</h4>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { UserInfo } from "@/store/user"

// 第一种方式
const userInfo = UserInfo();

// 第二种方式 响应式
const userInfoTwo = storeToRefs(UserInfo())

// 第三种  解构
let { name, age, doubleAge, doubleAgePlus, doubleAgeParams, userMainInfo} = storeToRefs(UserInfo())


const onAddAge = () => {
    userInfo.age ++;
}

const onAddAgeTwo = () => {
    let num = ref(23)
    userInfoTwo.age = num;
}

</script>
