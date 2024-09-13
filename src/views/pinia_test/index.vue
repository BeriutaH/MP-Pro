<template>
  <div class="box">
    <h1>pinia</h1>
    <div class="container">
      <ChildOne></ChildOne>
      <ChildTwo></ChildTwo>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChildOne from '@/views/pinia_test/ChildOne.vue'
import ChildTwo from '@/views/pinia_test/ChildTwo.vue'

/*
  vuex: 集中式管理状态容器,可以实现任意组件之间通信！！！
  核心概念: state、mutations、actions、getters、modules

  pinia: 集中式管理状态容器,可以实现任意组件之间通信！！！
  核心概念: state、actions、getters
  pinia写法: 选择器API、组合式API
*/
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background: skyblue;
}
.container {
  display: flex; /* 弹性容器 均匀分布*/
}
</style>
