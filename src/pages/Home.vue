<style>

</style>

<template>
    <div>
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
        <index-header></index-header>
        <imglist :imageList="imageList"></imglist>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import indexHeader from '../components/indexHeader.vue';
import imglist from '../components/imglist.vue';
import footerBar from '../components/footerBar.vue';

export default {
    name: 'Home',
    components: {
        indexHeader,
        imglist,
        footerBar
    },
    data () {
        return {
            imageList: tData.imageList
        }
    }
}
</script>