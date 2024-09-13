<template>
  <div class="son">
    <h3>I am son: {{ country }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let country = ref('山东')

const fly = () => {
  console.log('我可以飞')
}

// 组件内部数据对外关闭的，别人不能访问
// 如果想让外部访问需要通过defineExpose方法对外暴露
defineExpose({
  country,
  fly
})
</script>

<style scoped>
.son {
  width: 300px;
  height: 200px;
  background: cyan;
}
</style>
