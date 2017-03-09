<style>
	.footer-back-Btn {
		width: 12rem;
		margin: 0 auto;
	}

	.footer-back-Btn button {
		width: 100%;
		height: 1.8rem;
		background-color: #faf67e;
		color: #333;
	}
</style>

<template>
	<router-link to="/Home">
		<div class="footer-back-Btn">
			<button>返回首页</button>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'footer-back-Btn'
	}
</script>