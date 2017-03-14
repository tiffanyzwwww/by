<style>
	/*固定底部占满一行的按钮*/
	
</style>

<template>
	<router-link :to="btn.path">
		<button>{{btn.text}}</button>
	</router-link>
</template>

<script>
	export default {
		name: 'footer-bloack-btn',
		porps: {
			btn: {
				type: Object,
				required: true
			}
		}
	}
</script>