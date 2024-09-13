<template>
  <div class="child">
    <h3>钱数：{{ modelValue }}</h3>
    <button @click="handler">加钱/父组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
// 接受props
let props = defineProps(['modelValue'])
let $emit = defineEmits(['update:modelValue'])

// 子组件内部按钮的点击回调
const handler = () => {
  // 触发自定义事件
  $emit('update:modelValue', props.modelValue + 2000)
}
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>
