<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="com">
    <h1>
      各种Vue组件通信/传值
      <span style="color: red">非常重要</span>
    </h1>
    <div>
      <h2 style="display: inline">演示</h2>
      <!-- to="/props_pre" 表示点击这个链接将导航到 /props_pre 路径 -->
      <RouterLink to="/props_pre">props</RouterLink>
      <RouterLink to="/event_pre">custom event</RouterLink>
      <RouterLink to="/bus_pre">event bus</RouterLink>
      <RouterLink to="/model_pre">v-mode</RouterLink>
      <RouterLink to="/attrs_listeners_pre">useAttrs</RouterLink>
      <RouterLink to="/provide_inject_pre">provide-inject</RouterLink>
      <RouterLink to="/vuex_pre">pinia</RouterLink>
      <RouterLink to="/ref_parent_pre">ref$parent</RouterLink>
      <RouterLink to="/slot_pre">slot</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.com {
  margin: 10px; /* 为类名为 .com 的元素设置 10 像素的外边距 */
  a {
    font-size: 16px; /* <a> 元素设置字体大小为 16 像素 */
    margin-right: 5px; /* 右外边距为 5 像素 */
    &.router-link-active {
      color: red; /* 当 <a> 元素同时拥有 .router-link-active 类时，设置其字体颜色为红色 */
    }
  }
}

.box {
  border: solid 1px #aaa;
  margin: 5px;
  padding: 5px;
}
</style>
