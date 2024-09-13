<template>
  <div class="box">
    <h1>Provide与Inject: {{ car }}</h1>
    <hr />
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
import Child from '@/views/provide_inject/Child.vue'
// provide 和 inject 是用于跨组件共享数据的功能，特别适合在祖先组件和子孙组件之间传递数据，而不需要通过 props 或 emit 进行逐级传递
import { reactive, provide } from 'vue'

// let car = ref("法拉利")
const car = reactive({
  brand: 'Toyota',
  model: 'Corolla'
})
/*
 祖先组件给后代组件提供数据
 两个参数:
    第一个参数就是提供的数据key
    第二个参数:祖先组件提供数据
*/
provide('TOKEN', car)
</script>

<style scoped>
.box {
  width: 100vw;
  height: 600px;
  background: skyblue;
}
</style>
