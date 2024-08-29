<template>
	<view style="background-color: #f8f8f8; width: 100%; padding-top: 3vh;">
		<view>
			<swiper class="top-image-box" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item v-for="item in pictures" :key="item.id">
					<image class="swiper-img" @click="onPreviewImage(item.url)" :src="item.url"></image>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<uni-section title="我的服务" type="line" padding>
				<view class="menu-button-box" @click="goToGradesPage">
					<view class="menu-button-icon">
						<image class="item-icon" src="../../static/grades.png"></image>
					</view>
					<view class="menu-button-text">
						<text class="text">成绩查询</text>
					</view>
				</view>
				<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
				<view class="menu-button-box" @click="goToCoursePage">
					<view class="menu-button-icon">
						<image class="item-icon" src="../../static/course.png"></image>
					</view>
					<view class="menu-button-text">
						<text class="text">课表查询</text>
					</view>
				</view>
				<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
				<view class="menu-button-box" @click="goToGradesAnalysisPage">
					<view class="menu-button-icon">
						<image class="item-icon" src="../../static/grades-analysis.png"></image>
					</view>
					<view class="menu-button-text">
						<text class="text">成绩分析</text>
					</view>
				</view>
			</uni-section>
			<uni-section title="其他服务" type="line" padding>
				<view class="menu-button-box" @click="goToTomatoClockPage">
					<view class="menu-button-icon">
						<image class="item-icon" src="../../static/tomato-clock.png"></image>
					</view>
					<view class="menu-button-text">
						<text class="text">番茄钟</text>
					</view>
				</view>
				<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
				<view class="menu-button-box" @click="goToVisitorRegistrationPage">
					<view class="menu-button-icon">
						<image class="item-icon" src="../../static/sign-in.png"></image>
					</view>
					<view class="menu-button-text">
						<text class="text">来访登记</text>
					</view>
				</view>
			</uni-section>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role: '1',
				pictures: [{
						id: '1',
						url: "https://pic.imgdb.cn/item/656e9993c458853aef72abeb.png"
					},
					{
						id: '2',
						url: "https://pic.imgdb.cn/item/656e9993c458853aef72ac42.png"
					},
					{
						id: '3',
						url: "https://pic.imgdb.cn/item/656e9993c458853aef72acae.png"
					},
					{
						id: '4',
						url: "https://pic.imgdb.cn/item/656e9994c458853aef72ad03.png"
					},
					{
						id: '5',
						url: "https://pic.imgdb.cn/item/656e9993c458853aef72ab82.png"
					},
					{
						id: '6',
						url: "https://pic.imgdb.cn/item/656e99b8c458853aef730151.png"
					}
				]
			}
		},
		onShow() {
			uni.getStorage({
				key: 'role',
				success: (res) => {
					this.role = res.data;
				},
				fail: (res) => {
					this.role = '1';
				}
			});
		},
		methods: {
			goToGradesPage() {
				if (this.role === '1') {
					uni.navigateTo({
						url: '/pages/grades/grades',
					});
				} else {
					uni.navigateTo({
						url: '/pages/studentlist/studentlist?refer=grades'
					})
				}
			},
			goToCoursePage() {
				uni.navigateTo({
					url: '/pages/course/course'
				})
			},
			goToTomatoClockPage() {
				uni.navigateTo({
					url: '/pages/tomatoclock/tomatoclock'
				})
			},
			goToVisitorRegistrationPage() {
				uni.navigateTo({
					url: '/pages/visitorregistration/visitorregistration'
				})
			},
			goToGradesAnalysisPage() {
				if (this.role === '1') {
					uni.navigateTo({
						url: '/pages/gradesanalysis/gradesanalysis'
					})
				} else {
					uni.navigateTo({
						url: '/pages/studentlist/studentlist?refer=analysis'
					})
				}
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
	.top-image-box {
		margin: 0 auto;
		width: 90vw;
		height: 50vw;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0 15rpx 15rpx rgba(0, 0, 0, 0.2);
		margin-bottom: 10%;
	}

	.swiper-img {
		width: 90vw;
		height: 50vw;
	}
	.menu-button-box {
		display: flex;
		width: 100%;
	}

	.menu-button-icon {
		display: inline-block;
		width: 20%;
	}

	.menu-button-text {
		display: inline-block;
		width: 80%;
		height: 15vw;
		padding-top: 5vw;
	}

	.item-icon {
		width: 15vw;
		height: 15vw;
	}
</style>