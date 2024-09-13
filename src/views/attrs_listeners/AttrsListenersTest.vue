<template>
  <div>
    <h1>useAttrs</h1>
    <el-button type="primary" size="small" :icon="Edit"></el-button>
    <!-- 自定义组件 -->
    <HintButton
      type="primary"
      size="small"
      :icon="Edit"
      title="编辑按钮"
      @click="handler"
      @xxx="handler"
    ></HintButton>
  </div>
</template>

<script setup lang="ts">
// vue3框架提供一个方法useAttrs方法,它可以获取组件身上的属性与事件

// 图标组件
import { Edit } from '@element-plus/icons-vue'
import HintButton from '@/views/attrs_listeners/HintButton.vue'

// 点击回调
const handler = () => {
  alert(123493) // 点击按钮时弹出一个 alert 框
}
</script>

<style scoped></style>
