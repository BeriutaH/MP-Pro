<template>
  <div class="grand_child">
    <h1>我是孙组件</h1>
    <!-- ? 是 JavaScript 的可选链操作符（Optional Chaining Operator）。它用于安全地访问嵌套对象的属性，即使中间的某个属性是 null 或 undefined，也不会导致错误 -->
    <p>品牌: {{ car?.brand }}</p>
    <p>型号: {{ car?.model }}</p>
    <button @click="updateCar">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
// 注入祖先组件提供数据
// 需要参数:即为祖先提供数据的key
let car = inject('TOKEN')
const updateCar = () => {
  car.brand = 'Honda'
  car.model = 'xxx'
}
</script>

<style scoped>
.grand_child {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
