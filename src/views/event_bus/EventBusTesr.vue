<template>
<div class="box">
  <h1>全局事件总线$bus</h1>
  <hr>
  <div class="container">
    <ChildOne></ChildOne>
    <ChildTwo></ChildTwo>
  </div>
</div>
</template>

<script setup lang="ts">
import ChildOne from '@/views/event_bus/ChildOne.vue'
import ChildTwo from '@/views/event_bus/ChildTwo.vue'
</script>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: cadetblue;
}
.container {
  display: flex;  /* 为一个 flex 容器。所有直接子元素将变为 flex items */
  justify-content: space-between;  /* 容器中的所有子元素（即 flex 项目）之间的空隙将平均分配，使它们之间的距离相等 */
}
</style>
