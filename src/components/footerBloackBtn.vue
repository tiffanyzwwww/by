<style>
	/*固定底部占满一行的按钮*/
	.footerBloackBtn {
		width: 100%;
		height: 2rem;
		position: fixed;
		bottom: 0;
		overflow: hidden;
		/*border: 1px solid red;*/
	}

	.footerBloackBtn button {
		width: 100%;
		height: 2rem;
		background-color: #faf67e;
		/*display: inline-block;*/
		color: #666;
	}
</style>

<template>
	<div class="footerBloackBtn">
		<router-link :to="btn.path">
			<button>{{btn.text}}</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'footer-bloack-btn',
		props: {
			btn: {
				type: Object,
				// required: true,
				default: {
					btn: {
						text: '返回首页',
						path: '/Home'
					}
				}
			}
		}
	}
</script>