<template>
  <div class="daughter">
    <h1>I am daughter: {{ country }}</h1>
    <!-- $parent 获取父组件的事件，必须是 $parent这个词 -->
    <button @click="handler($parent)">点击把台湾给我</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let country = ref('')

const handler = ($parent) => {
  country.value = '台湾'
  $parent.country = ''
}
</script>

<style scoped>
.daughter {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>
