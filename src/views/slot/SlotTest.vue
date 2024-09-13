<template>
  <div>
    <h1>slot</h1>
    <!-- : 是 v-bind 的简写，用于动态绑定属性，将 tasks 数据传递给 TestTwo 组件 -->
    <TestTwo :tasks="tasks">
      <!-- 作用域插槽（scoped slots），通过 v-slot 向父组件传递动态内容 -->
      <template v-slot="{ $row, $index }">
        <p :style="{ color: $row.done ? 'green' : 'red' }">
          {{ $row.title }} ----- {{ $index }}
        </p>
      </template>
    </TestTwo>
    <TestOne>
      <div>
        <pre>大江东去浪淘尽，千古风流人物</pre>
      </div>
      <template #a>
        <div>我是填充具名插槽#a位置结构</div>
      </template>
      <!-- #b具名插槽 填充b v-slot指令可以简化为# -->
      <template #b>
        <div>我是填充具名插槽#b位置结构</div>
      </template>
    </TestOne>
  </div>
</template>

<script setup lang="ts">
import TestOne from '@/views/slot/TestOne.vue'
import TestTwo from '@/views/slot/TestTwo.vue'
import { ref } from 'vue'
/*
  插槽: 默认插槽、具名插槽、作用域插槽
  作用域插槽: 就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些回传的
  数据是以何种结构或者外观在子组件内部去展示
*/

// tasks
let tasks = ref([
  { id: 1, title: '吃饭', done: true },
  { id: 2, title: '睡觉', done: false },
  { id: 3, title: '刷剧', done: true },
  { id: 4, title: '遛狗', done: false }
])
console.log(tasks.value)
</script>

<style scoped></style>
