<template>
<div class="child_one">
  <h3 style="color: white">我是bus组件1</h3>
</div>
</template>

<script setup lang="ts">
import { $Bus } from '@/bus'
// 组合式API函数
import { onMounted } from 'vue'
// 组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数:即为事件类型  第二个参数:即为事件回调
  $Bus.on('car', (car: string) => {
    console.log(car)
  })
})

</script>

<style scoped>
.child_one {
  width: 300px;
  height: 300px;
  background: #2c3e50;
}
</style>