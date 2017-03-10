<style>
	.header {
		width: 100%;
		height: 6rem;
		line-height: 6rem;
		background-color: #faf67e;
		font-size: 2rem;
		text-align: center;
	}	
</style>

<template>
	<div class="header">{{title}}</div>
</template>

<script>
	export default {
		name: 'index-header',
		props: {
			title: {
				type: String,
				default: 'By'
			}
		},
		data () {
			return {

			}
		}
	}
</script>