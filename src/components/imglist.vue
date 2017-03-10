<style>
.index-imglist ul {
    width: 100%;
    /*text-align: left;*/
}

.index-imglist li {
    float: left;
    width: 49%;
    /*border: 1px solid red;*/
}

.index-imglist li:nth-child(odd) {
    margin-right: .3rem;
}

.index-imglist ul li img {
    width: 100%;
    height: 8rem;
    text-align: center;
}
</style>

<template>
    <div class="index-imglist">
        <ul>
            <li v-for="item in imageList">
                <router-link :to="{ name: 'Detail', params: {imgId: item.imgId}}">
                    <img :src="item.src">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'imglist',
    data () {
        return {
        }
    },
    props: {
        imageList: Array
    },
    methods: {
        
    }
}
</script>