// 引入 Vue
import Vue from 'vue'
// 引入一个叫做 App 的 Vue 组件
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
    // 渲染 App 组件
    render : h => h(App)
}).$mount('#app') // 挂载到 #app 的元素上
