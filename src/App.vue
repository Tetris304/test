<template>
    <div class="box">
        这里是根组件
        <!-- 使用子组件的标签名 -->
        <!-- <recommend v-if="toggle"></recommend>
        <singer></singer> -->
        <!-- 动态组件 -->
        <component :is="toggle ? 'recommend' : 'singer'"></component>
    </div>
</template>

<script>
// 引入当前路径下叫 Recommend.vue 的组件
import RecommendVue from './Recommend.vue'
import SingerVue from './Singer.vue'
// 一个文件就是一个组件，通过 export default 导出一个对象
export default {
    // 注册引入的组件
    components : {
        // 之后组件名当做标签名使用
        recommend : RecommendVue,
        Singer : SingerVue
    },
    data () {
        return {
            name : 'hello',
            toggle : true
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
