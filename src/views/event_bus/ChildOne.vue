<template>
  <div class="child_one">
    <h3 style="color: white">我是bus组件1</h3>
  </div>
</template>

<script setup lang="ts">
import { $Bus } from '@/bus'
//  onMounted: 是一个生命周期钩子函数，表示当组件实例被挂载到 DOM 上后，调用这个函数
import { onMounted } from 'vue'
// 组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数:即为事件类型  第二个参数:即为事件回调
  $Bus.on('car', (car: string) => {
    console.log("我是组件1, 这是2发过来的数据: ", car)
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
