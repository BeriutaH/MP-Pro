<template>
  <div class="child_one">
    <h1>{{ infoStore.count }} ------------ {{ infoStore.total }}</h1>
    <button @click="updateCount">点击修改仓库数据</button>
  </div>
</template>

<script setup lang="ts">
import userInfoStore from '@/stores/modules/info'
// 获取小仓库对象
let infoStore = userInfoStore()
console.log(infoStore)

// 修改数据方法
const updateCount = () => {
  // 仓库调用自身的方法去修改仓库的数据
  infoStore.updateNum(1)
}
</script>

<style scoped>
.child_one {
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
</style>
