<style>
	.detail-box {
		margin-top: .3rem;
		margin-bottom: 2rem;
	}

	.detail-box-content {
		
	}

	.detail-box-content img {
		width: 100%;
		height: 15rem;
	}
</style>

<template>
	<div>
		<index-header :title="item.title"></index-header>
		<div class="detail-box">
			<div class="detail-box-content">
				<img :src="item.src" alt="">
			</div>
		</div>
		<footer-bar :btn="footerBtn"></footer-bar>
	</div>
</template>

<script>
	import indexHeader from '../components/indexHeader.vue';
	import footerBar from '../components/footerBar.vue';

	export default {
		name: 'Detail',
		components: {
			indexHeader,
			footerBar
		},
		computed: {
			item: function() {
				return this.tData.imageList[this.$route.params.imgId];
			}
		},
		mounted: function() {
			console.log('Detail init');
		},
		data () {
			return {
				tData: tData,
				footerBtn: [{
					text: '买买买',
					path: '/Home'
				},{
					text: '返回首页',
					path: '/Home'
				}]
			}
		},
		methods: {

		}
	}
</script>