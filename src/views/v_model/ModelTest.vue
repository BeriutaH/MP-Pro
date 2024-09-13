<template>
  <div>
    <h1>v-model: 钱的数量: {{ money }} 页面:{{ pageNo }} 页面数值:{{ pageSize }}</h1>
    <input type="text" v-model="info" />
    <hr />
    <!-- props:父亲给儿子数据 -->
    <!-- <Child :modelValue="money" @update:modelValue="handler"></Child> -->
    <!--
     v-model组件身上使用
       第一: 相当有给子组件传递props[modelValue] = 10000
       第二: 相当于给子组件绑定自定义事件update:modelValue
   -->

    <ChildOne v-model="money"></ChildOne>
    <!-- v-model 默认使用 modelValue 作为属性名 -->
    <hr />
    <!-- 绑定多个v-model -->
    <ChildTwo v-model:pageNo="pageNo" v-model:pageSize="pageSize"></ChildTwo>
  </div>
</template>

<script setup lang="ts">
// v-model指令:收集表单数据,数据双向绑定
// v-model也可以实现组件之间的通信,实现父子组件数据同步的业务
// 父亲给子组件数据 props
// 子组件给父组件数据 自定义事件
import { ref } from 'vue'
import ChildOne from '@/views/v_model/ChildOne.vue'
import ChildTwo from '@/views/v_model/ChildTwo.vue'

let info = ref('')
// 父组件的数据钱数
let money = ref(10000)
// // 自定义事件的回调函数
// const handler = (num: number) => {
//   // 接收子组件传递过来的数据
//   console.log("子组件传递过来的: ", num)
//   // money.value = num
// }

// 父组件的数据
let pageNo = ref(1)
let pageSize = ref(3)
</script>

<style scoped></style>
