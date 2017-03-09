<style>
	button {
		width: 10rem;
		height: 5rem;
		background-color: red;
	}
</style>

<template>
	<div>
		详情,imgId:{{ $route.params.imgId }}
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		mounted: function() {
			console.log('Detail init');
		},
		data () {
			return {
				imageList: tData.imageList
			}
		},

		methods: {

		}
	}
</script>