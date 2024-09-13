<template>
  <div class="box">
    <h1>父组件：祖国: {{ country }}</h1>
    <button @click="handler">把台湾收回</button>
  </div>
  <hr />
  <Daughter ref="daughter"></Daughter>
  <hr />
  <Son ref="son"></Son>
</template>

<script setup lang="ts">
// ref:可以获取真实的DOM节点,可以获取到子组件实例VC
// $parent:可以在子组件内部获取到父组件的实例
import Daughter from '@/views/ref_children_parent/Daughter.vue'
import Son from '@/views/ref_children_parent/Son.vue'
import { ref } from 'vue'
// 父组件国家
let country = ref('')

// 获取子组件实例
let daughter = ref()

let son = ref()

// 获取父组件内部按钮点击回调
const handler = () => {
  country.value = '台湾'
  //  女儿的值为空
  daughter.value = ''
  son.value.fly()
}

// 对外暴露
defineExpose({
  country
})
</script>

<style scoped></style>
