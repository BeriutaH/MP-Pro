<template>
  <div class="child">
    <h1>我是子组件</h1>
    <hr />
    <GrandChild></GrandChild>
  </div>
</template>

<script setup lang="ts">
import GrandChild from '@/views/provide_inject/GrandChild.vue'
</script>

<style scoped>
.child {
  width: 300px;
  height: 400px;
  background: yellowgreen;
}
</style>
