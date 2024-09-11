<script setup lang="ts">
// props 可以实现父子组件通信， props数据是只读的
import Child from '@/views/props/Child.vue'
import { ref } from 'vue'
let money = ref(10000) // // 引入 ref API 来创建响应式变量
</script>

<template>
  <div class="box">
    <h1>props: 我是父组件</h1>
    <hr />
    <Child info="我是父组件" :money="money"></Child>
  </div>
</template>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: darkgrey;
}
</style>
