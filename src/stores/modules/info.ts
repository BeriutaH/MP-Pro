//定义info小仓库
import { defineStore } from 'pinia'
// 第一个仓库：小仓库名字 第二个参数，小仓库配置对象
// defineStore 方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
// 第一个参数 'info'：这是这个 store 的名称（id），可以用来引用这个 store。
// 第二个参数是一个配置对象，其中包含三个部分：state、actions 和 getters。
let userInfoStore = defineStore('info', {
  // 存储数据:state 用于定义存储的数据。这里返回了一个对象，表示该 store 的初始状态
  state() {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  },
  // actions 用于定义可以修改 state 的函数
  actions: {
    // 注意:函数没有context上下文对象
    // 没有commit、没有mutations去修改数据
    updateNum(a: number) {
      this.count += a
    }
  },
  // getters 用来定义派生状态，类似于 Vuex 中的 getters，但它的作用类似于计算属性，可以基于 state 的某些值计算出新的数据
  getters: {
    // total：是一个 getter，使用数组的 reduce 方法计算 arr 数组中所有元素的总和并返回
    total() {
      // 该方法通过遍历 arr，将每个元素累加起来，得到总和 result 并返回
      let result: any = this.arr.reduce((prev: number, next: number) => {
        return prev + next
      }, 0) // 初始值 0，表示从 0 开始累加
      return result
    }
  }
})

// 对外暴露方法
export default userInfoStore
