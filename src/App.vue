<template>
    <div class="box">
        这里是单文件组件
        <!-- 使用子组件的标签名 -->
        <hello></hello>
    </div>
</template>

<script>
// 引入当前路径下叫 son.vue 的组件
import sonVue from './son.vue'
// 一个文件就是一个组件，通过 export default 导出一个对象
export default {
    // 注册引入的组件
    components : {
        // 之后组件名当做标签名使用
        hello : sonVue
    },
    data () {
        return {
            name : 'hello'
        }
    },
}

</script>

<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: yellowgreen;
    }
</style>
