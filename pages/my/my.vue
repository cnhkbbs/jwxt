<template>
	<view class="login-box">
		<image class="login-box-bg" src="https://pic.imgdb.cn/item/655e1909c458853aef94c6f6.png"></image>
		<view class="avatar">
			<view class="avatar-box" v-show="is_login">
				<image class="avatar-img" src="https://pic.imgdb.cn/item/655e1b3fc458853aefa1a3fe.png"></image>
				<text style="display: block;width: 100%; color: white;">你好{{name}}</text>
			</view>
			<view class="login-button-box" v-show="!is_login">
				<button class="login-button" @click="goToLoginPage">登录</button>
			</view>
		</view>

	</view>
	<view class="fun-button">
		<view class="menu-button" @click="goToMessgePage">
			<view class="menu-button-icon-box">
				<image class="menu-button-icon" src="../../static/message.png"></image>
			</view>
			<text class="menu-text">站内信</text>
		</view>
		<view class="menu-button" @click="goToUserInfoPage">
			<view class="menu-button-icon-box">
				<image class="menu-button-icon" src="../../static/userinfo.png"></image>
			</view>
			<text class="menu-text">个人信息</text>
		</view>
	</view>
	<view class="fun-list">
		<uni-section class="mb-10" title="意见反馈" @click="goToFeedbackPage"></uni-section>
		<uni-section class="mb-10" title="关于" @click="goToAboutPage"></uni-section>
		<button v-show="is_login" type="default" @click="userLogout">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				host_url: '',
				token: '',
				username: '',
				role: '',
				name: '',
				is_login: false
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
		},
		onShow() {
			this.loadUserData();
		},
		methods: {
			goToLoginPage() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			goToFeedbackPage() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				});
			},
			goToMessgePage(){
				uni.navigateTo({
					url: '/pages/message/message'
				})
			},
			goToAboutPage() {
				uni.navigateTo({
					url: '/pages/about/about'
				});
			},
			goToUserInfoPage(){
				uni.navigateTo({
					url: '/pages/userinfo/userinfo'
				});
			},
			loadUserData() {
				uni.getStorage({
					key: 'token',
					success: (res) => {
						this.token = res.data;
						this.is_login = true;
					},
					fail: (res) => {
						this.is_login = false;
						return 0;
					}
				});
				uni.getStorage({
					key: 'username',
					success: (res) => {
						this.username = res.data;
					},
					fail: (res) => {
						console.log('read username fail');
					}
				});
				uni.getStorage({
					key: 'role',
					success: (res) => {
						this.role = res.data;
					},
					fail: (res) => {
						console.log('read role fail');
					}
				});
				uni.getStorage({
					key: 'name',
					success: (res) => {
						this.name = res.data;
					},
					fail: (res) => {
						console.log('read name fail');
					}
				});
			},
			userLogout() {
				uni.request({
					url: this.host_url + 'auth/logout',
					method: 'POST',
					data: {
						username: this.username,
						token: this.token
					},
					success: (res) => {
						uni.showToast({
							title: '退出成功'
						});
						this.is_login = false;
					},
					fail: (err) => {
						console.error('err', err);
					}
				});
				uni.removeStorage({
					key: 'token'
				});
				uni.removeStorage({
					key: 'username'
				});
				uni.removeStorage({
					key: 'role'
				});
				uni.removeStorage({
					key: 'name'
				});
			}
		}
	}
</script>

<style>
	.login-box {
		height: 100vw;
	}

	.login-box-bg {
		width: 100%;
		height: 110vw;
		filter: brightness(80%);
		z-index: -1;
		display: block;
		position: fixed;
	}

	.avatar {
		margin: 0 auto;
		padding-top: 28vw;
		width: 60%;
		z-index: 1;
		text-align: center;
	}

	.avatar-img {
		width: 30vw;
		height: 30vw;
	}

	.login-button {
		background-color: dodgerblue;
		color: white;
		height: 13vw;
		width: 23vw;
	}

	.fun-button {
		width: 100%;
		border-radius: 20rpx 20rpx 0 0;
		overflow: hidden;
		background-color: white;
		text-align: center;
	}

	.fun-list {
		background-color: white;
	}
	.menu-button {
		width: 20vw;
		height: 18vw;
		margin: 3vw;
		display: inline-block;
		font-size: 100%;
		text-align: center;
	}
	
	.menu-button-icon-box {
		margin: 0 auto;
		width: 16vw;
		height: 16vw;
		padding: 10rpx;
		border-radius: 25%;
		background-color: white;
	}
	.menu-button-icon {
		width: 100%;
		height: 100%;
	}
	.mb-10 {
		margin-top: 1rem;
		margin-bottom: 10px;
	}
</style>