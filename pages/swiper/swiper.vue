<template>
	<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
		<swiper-item v-for="item in pictures" :key="item.id">
			<image @click="onPreviewImage(item.url)" :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				pictures: [{
						id: '1',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202211/4f182009973bd05e633a12096c9d986b--4261460870.jpg"
					},
					{
						id: '2',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202209/3aec73edc257e4d7f679a4e9791d93e1--405277223.jpg"
					},
					{
						id: '3',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202310/17e05efa4e03c4a62a9ef4dc8fbeb409--2755567652.jpg"
					},
					{
						id: '4',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/d5394a3a31c3bd976198f6668f28ab5e--300955069.jpg"
					},
					{
						id: '5',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/7d4cdf253feece60ab5c55c8e185008f--342728100.jpg"
					},
					{
						id: '6',
						url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/3d4cd72c4b547d123afeb5ec630de597--2966950063.jpg"
					}
				]
			}
		},
		methods: {
			onPreviewImage(url){
				uni.previewImage({
					urls: this.pictures.map(v=>v.url),
					current: url
				})
			}
		}
	}
</script>

<style>
	.banner,
	.banner image {
		width: 760rpx;
		height: 500rpx;
	}
</style>