<style>
	.header {
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		background-color: #f7fc76;
		font-size: 1.1rem;
	}

	.header img {
		width: 1.1rem;
		margin-left: .6rem;
		margin-right: .2rem;
	}
</style>

<template>
	<div class="header">
		<img src="../assets/menus.png" alt="">
		{{title}}
	</div>
</template>

<script>
	export default {
		name: 'index-header',
		props: {
			title: {
				type: String,
				default: 'BY !'
			}
		},
		data () {
			return {

			}
		}
	}
</script>