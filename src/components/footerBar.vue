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
		<router-link to="/Login">
			<button class="footerBar-btn-left">登陆</button>
		</router-link>
		<router-link to="/Register">
			<button class="footerBar-btn-right">注册</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'footer-bar'
	}
</script>