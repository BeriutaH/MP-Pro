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
  vuex: 集中式管理状态容器,可以实现任意组件之间通信
  核心概念: state存储数据、mutations修改数据、actions处理异步、getters计算属性、modules模块开发

  pinia: 集中式管理状态容器,可以实现任意组件之间通信
  核心概念: state存储数据、actions处理数据业务、异步、getters计算属性
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
