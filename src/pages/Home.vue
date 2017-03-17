<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

<template>
    <div>
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
        <index-header></index-header>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <!-- <image-list :imageList="tData.imageList"></image-list>
        <footer-bar v-if="!tData.isLogin" :btn="footerBtn"></footer-bar>
        <footer-bloack-btn v-if="tData.isLogin" :btn="footerBloackBtnData"></footer-bloack-btn> -->
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