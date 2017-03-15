<style>

</style>

<template>
    <div>
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
        <index-header></index-header>
        <image-list :imageList="tData.imageList"></image-list>
        <footer-bar v-if="!tData.isLogin" :btn="footerBtn"></footer-bar>
        <footer-bloack-btn v-if="tData.isLogin" :btn="footerBloackBtnData"></footer-bloack-btn>
    </div>
</template>

<script>
import indexHeader from '../components/indexHeader.vue';
import imageList from '../components/imageList.vue';
import footerBar from '../components/footerBar.vue';
import footerBloackBtn from '../components/footerBloackBtn.vue';

export default {
    name: 'Home',
    components: {
        indexHeader,
        imageList,
        footerBar,
        footerBloackBtn
    },
    data () {
        return {
            tData: tData,
            footerBtn: [{
                    text: '登陆',
                    path: '/Login'
                },{
                    text: '注册',
                    path: '/Register'
                }],
            footerBloackBtnData: {
                text: '私人定制',
                path: '/Diy1'
            }
        }
    }
}
</script>