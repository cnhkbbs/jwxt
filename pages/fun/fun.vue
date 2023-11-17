<template>
	<view>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
			<swiper-item v-for="item in pictures" :key="item.id">
				<image @click="onPreviewImage(item.url)" :src="item.url"></image>
			</swiper-item>
		</swiper>
	</view>
	<view>
		<uni-section title="功能一览" type="line" padding>
			<uni-grid :column="4">
				<uni-grid-item class="grid-item">
					<image class="item_icon" src="../../static/grades.png" mode="" @click="goToGradesPage()"></image>
					<text class="text">成绩查询</text>
				</uni-grid-item>
				<uni-grid-item class="grid-item">
					<image class="item_icon" src="../../static/grades-analysis.png" mode="" @click="goToCoursePage()"></image>
					<text class="text">课表查询</text>
				</uni-grid-item>
				<uni-grid-item class="grid-item">
					<image class="item_icon" src="../../static/conversation.png" mode="" @click="goToCoursePage()"></image>
					<text class="text">功能1</text>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="其他功能" type="line" padding>
			<uni-grid :column="4">
				<uni-grid-item class="grid-item">
					<image class="item_icon" src="../../static/tomato-clock.png" mode="" @click="goToTomatoClockPage"></image>
					<text class="text">番茄钟</text>
				</uni-grid-item>
				<uni-grid-item class="grid-item">
					<image class="item_icon" src="../../static/logo.png" mode="" @click="goToCoursePage()"></image>
					<text class="text">课表查询</text>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
	</view>

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
			goToGradesPage() {
				uni.navigateTo({
					url: '/pages/grades/grades',
				});
			},
			goToCoursePage() {
				uni.navigateTo({
					url: '/pages/course/course',
				});
			},
			goToTomatoClockPage() {
				uni.navigateTo({
					url: '/pages/tomatoclock/tomatoclock'
				})
			},
			onPreviewImage(url) {
				uni.previewImage({
					urls: this.pictures.map(v => v.url),
					current: url
				})
			}
		}
	}
</script>

<style>
	.item_icon {
		display: inline-block;
		width: 5rem;
	}

	.grid-item {
		width: 5.33rem;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
	}

	.banner,
	.banner image {
		width: 760rpx;
		height: 500rpx;
	}
</style>