<template>
<div class="child_two">
  <h2>我是子组件2</h2>
  <button @click="handler">点击子组件2的事件</button>
</div>
</template>

<script setup lang="ts">
import { $Bus } from '@/bus'

// 点击按钮回调函数
const handler = () => {
  // 触发事件
  $Bus.emit('car', {car: '法拉利'})
}
</script>

<style scoped>
.child_two{
  width: 300px;
  height: 300px;
  background: skyblue;
}
</style>