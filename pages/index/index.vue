<template>
	<view style="background-color: #f8f8f8; width: 100%; padding-top: 3vh;">
		<view class="head-bar">
			<view class="top-image-box">
				<swiper>
					<swiper-item>
						<image class="top-image" src="https://pic.imgdb.cn/item/6565ba20c458853aefabc61c.png"></image>
					</swiper-item>
				</swiper>
			</view>
			<uni-notice-bar show-icon scrollable :text="notice" :speed=50 />
		</view>
		<view class="notice-box" v-show="show_notice">
			<image src="https://pic.imgdb.cn/item/656c490dc458853aefcd2d86.png" mode="aspectFit"></image>
		</view>
		<view class="menu-button-box">
			<view class="menu-button-row" v-show="!guest_mode">
				<view class="menu-button" @click="goToGradesPage">
					<view class="menu-button-icon-box">
						<image class="menu-button-icon" src="../../static/grades.png"></image>
					</view>
					<text class="menu-text">成绩查询</text>
				</view>
				<view class="menu-button" @click="goToCoursePage">
					<view class="menu-button-icon-box">
						<image class="menu-button-icon" src="../../static/course.png"></image>
					</view>
					<text class="menu-text">课程表</text>
				</view>
				<view class="menu-button" @click="goToCampusMap">
					<view class="menu-button-icon-box">
						<image class="menu-button-icon" src="../../static/locate.png"></image>
					</view>
					<text class="menu-text">校园地图</text>
				</view>
			</view>
			<view class="menu-button-row" v-show="guest_mode">
				<view class="menu-button" @click="goToCampusMap">
					<view class="menu-button-icon-box">
						<image class="menu-button-icon" src="../../static/locate.png"></image>
					</view>
					<text class="menu-text">校园地图</text>
				</view>
				<view class="menu-button" @click="goToVisitorRegistrationPage">
					<view class="menu-button-icon-box">
						<image class="menu-button-icon" src="../../static/sign-in.png"></image>
					</view>
					<text class="menu-text">来访登记</text>
				</view>
			</view>
		</view>
		<view class="post-list">
			<text class="post-list-title">校园资讯</text>
			<view class="post-card" v-for="(item, index) in postList" :key="index" @click="goToPostPage(item.title)">
				<view class="image-box">
					<image class="cover-image" :src="item.cover"></image>
				</view>
				<view class="post-title-box">
					<text class="post-title">{{ item.title }}</text>
					<text style="font-size: 80%; color: darkgray;">{{item.author}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				postList: [],
				host_url: '',
				notice: '',
				role: '1',
				guest_mode: false,
				show_notice: false
			};
		},
		onShow() {
			uni.getStorage({
				key: 'role',
				success: (res) => {
					this.role = res.data;
					this.guest_mode = false;
				},
				fail: (res) => {
					this.guest_mode = true;
				}
			});
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.getPostList();
			this.getNotice();
		},
		methods: {
			goToPostPage(title) {
				uni.navigateTo({
					url: '/pages/postpage/postpage?title=' + title,
				});
			},
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
			goToVisitorRegistrationPage() {
				uni.navigateTo({
					url: '/pages/visitorregistration/visitorregistration'
				})
			},
			goToCampusMap() {
				uni.navigateTo({
					url: '/pages/campusmap/campusmap'
				})
			},
			getPostList() {
				uni.request({
					url: this.host_url + 'posts/list',
					method: 'POST',
					success: (res) => {
						const postList = res.data
						this.$set(this, 'postList', postList);
					},
					fail: (err) => {
						this.show_notice = true;
						console.log('请求失败', err);
					}
				});
			},
			getNotice() {
				uni.request({
					url: this.host_url + 'notice',
					success: (res) => {
						this.notice = res.data;
					},
					fail: (err) => {
						console.error('请求失败', err);
					}
				})
			}
		}
	};
</script>

<style>
	.head-bar {
		width: 100%;
		height: auto;
	}

	.top-image-box {
		margin: 0 auto;
		width: 80%;
		height: auto;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0 15rpx 15rpx rgba(0, 0, 0, 0.2);
		margin-bottom: 10%;
	}

	.top-image {
		width: 100%;
		height: 100%;
	}

	.menu-button-box {
		width: 100vw;
		text-align: center;
		margin: 0 auto;
		height: 30vw;
	}

	.menu-button {
		width: 18vw;
		height: 18vw;
		margin: 3vw;
		display: inline-block;
		font-size: 100%;
		text-align: center;
	}

	.menu-button-icon-box {
		margin: 0 auto;
		width: 13vw;
		height: 13vw;
		padding: 10rpx;
		border-radius: 25%;
		background-color: #f8f8f8;
	}

	.menu-button-icon {
		width: 100%;
		height: 100%;
	}

	.menu-text {
		display: block;
		width: 100%;
		font-size: 90%;
	}

	.post-list {
		width: 100%;
		margin: 0 auto;
		padding-top: 5vw;
	}

	.post-list-title {
		text-align: center;
		display: block;
		margin: 0 auto;
		width: 30%;
		font-size: 150%;
	}

	.post-card {
		margin-top: 5vw;
		margin-bottom: 5vw;
		margin-left: 2vw;
		margin-right: 2vw;
		background-color: white;
		box-shadow: 0 8rpx 15rpx rgba(0, 0, 0, 0.1);
	}

	.image-box {
		height: 38vw;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
		overflow: hidden;
	}

	.cover-image {
		width: 100%;
		height: 50vw;
	}

	.post-title-box {
		width: 100%;
		padding: 5rpx 2rpx 10rpx 15rpx;
	}

	.post-title {
		display: block;
		width: 100%;
		font-size: 100%;
	}
	.notice-box{
		width: 100vw;
		text-align: center;
		height: 145vh;
	}
	.notice-box image{
		width: 95vw;
		height: 130vh;
	}
</style>