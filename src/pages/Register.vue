<style>
	.login-box {
		margin: 0 auto;
		width: 12rem;
		margin-top: 3rem;
		/*border: 1px solid red;*/
	}

	.login-box input {
		width: 9rem;
		height: 1.5rem;
		margin-top: 1rem;
	}

	.login-box-btn button {
		width: 100%;
		height: 1.8rem;
		margin-top: 1.5rem;
		background-color: #00aced;
		color: #fff;
	}
</style>

<template>
	<div>
		<indexHeader></indexHeader>
		<div class="login-box">
			<div>
				帐号: <input type="text">
			</div>
			<div>
				密码: <input type="text">
			</div>
			<div class="login-box-btn">
				<button>确认注册</button>
			</div>
		</div>
		<footer-back-Btn></footer-back-Btn>
	</div>
</template>

<script>
	import indexHeader from '../components/indexHeader.vue';
	import footerBackBtn from '../components/footerBackBtn.vue';

	export default {
		name: 'Register',
		components: {
	        indexHeader,
	        footerBackBtn
	    }
	}
</script>