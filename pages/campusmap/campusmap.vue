<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			title: 'map',
			latitude: 41.9082,
			longitude: 123.4148,
		}
	},
	methods: {

	}
}
</script>

<style>

</style>
