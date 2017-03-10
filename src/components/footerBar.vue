<style>
	.footerBar {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		position: fixed;
		bottom: 0;
		overflow: hidden;
		/*border: 1px solid red;*/
	}

	.footerBar button {
		width: 50%;
		float: left;
		height: 2rem;
		/*display: inline-block;*/
		color: #666;
	}

	.footerBar-btn-left {
		background-color: #f6f6f6;

	}

	.footerBar-btn-right {
		background-color: #faf67e;
	}
</style>

<template>
	<div class="footerBar">
		<router-link :to="btn[0].path">
			<button class="footerBar-btn-left">{{btn[0].text}}</button>
		</router-link>
		<router-link :to="btn[1].path">
			<button class="footerBar-btn-right">{{btn[1].text}}</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'footer-bar',
		props: {
			btn: {
				type: Array,
				default: [{
					text: '登录',
					path: '/Login'
				},{
					text: '注册',
					path: '/Register'
				}]
			}
		}
	}
</script>