<template>
  <div>
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
    <pre @click="handler">
      大江东去浪淘尽，千古风流人物
    </pre>
    <button @click="handlerOne(1, 2, 3, $event)">点击我传递多个参数</button>
    <hr />
    <!--  在页面上插入水平线-->
    <!--
        vue2框架当中:这种写法自定义事件,可以通过.native修饰符变为原生DOM事件
        vue3框架下面写法其实即为原生DOM事件

        vue3:原生的DOM事件不管是放在标签身上、组件标签身上都是原生DOM事件
      -->
    <EventOne @click="handlerTwo"></EventOne>
    <hr />
    <!--  绑定自定义事件，字组件给父组件传递数据  -->
    <EventTwo @beriuta="handlerThree" @click="handlerFour"></EventTwo>
  </div>
</template>

<script setup lang="ts">
// 引入子组件
import EventOne from '@/views/custom_event/EventOne.vue'
import EventTwo from '@/views/custom_event/EventTwo.vue'

// 事件回调
const handler = (event) => {
  // event即为事件对象 （JavaScript 原生）
  console.log(event)
}
const handlerOne = (a, b, c, $event) => {
  // $event（Vue 特有）
  console.log(a, b, c)
  console.log('当前的事件对象', $event)
}

const handlerTwo = () => {
  console.log('handlerTwo')
}

const handlerThree = (param1, param2) => {
  console.log(param1, param2)
}

const handlerFour = (param1, param2) => {
  console.log(param1, param2)
}
</script>

<style scoped></style>
