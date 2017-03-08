<style>
.index-imglist ul {
    width: 100%;
    /*text-align: left;*/
}

.index-imglist li {
    float: left;
    width: 50%;
    /*border: 1px solid red;*/
}

.index-imglist ul li img {
    width: 7.9rem;
    height: 7.9rem;
    text-align: center;
}
</style>

<template>
    <div class="index-imglist">
        <ul>
            <li v-for="item in images"><img :src="item.src"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'imglist',
    data () {
        return {
          images: [{
            id: '1',
            src: './src/assets/test.jpg'
          },{
            id: '2',
            src: './src/assets/test.jpg'
          },{
            id: '3',
            src: './src/assets/test.jpg'
          },{
            id: '4',
            src: './src/assets/test.jpg'
          },{
            id: '5',
            src: './src/assets/test.jpg'
          }]
        }
    }
}
</script>