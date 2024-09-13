<template>
  <div class="child_two">
    {{ infoStore.count }}
    <p @click="updateTodo">{{ todoStore.arr }}-----{{ todoStore.total }}</p>
    <button @click="countProject">点击查看Project</button>
  </div>
</template>

<script setup lang="ts">
import userInfoStore from '@/stores/modules/info'

// 获取小仓库对象
let infoStore = userInfoStore()

// 引入组合式API函数仓库
import useTodoStore from '@/stores/modules/todo'
let todoStore = useTodoStore()

// 点击p段落去修改仓库数据
const updateTodo = () => {
  todoStore.updateTodo()
}

const countProject = () => {
  console.log(todoStore.todos)
}
</script>

<style scoped>
.child_two {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>
