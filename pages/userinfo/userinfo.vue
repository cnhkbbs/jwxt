<template>
	<view style="background-color: #f8f8f8; height: 100vh; width: 100vw; margin: 0; padding-top: 3vh;">
		<view class="info-box" v-show="!is_teacher">
			<view class="info-item">
				<text>姓名：{{name}}</text>
			</view>
			<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
			<view class="info-item">
				<text>电话：{{phone}}</text>
			</view>
			<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
			<view class="info-item">
				<text>学院：{{college}}</text>
			</view>
			<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
			<view class="info-item">
				<text>专业：{{major}}</text>
			</view>
		</view>
		<view class="info-box" v-show="is_teacher">
			<view class="info-item">
				<text>姓名：{{name}}</text>
			</view>
			<view style="height: 1rpx; width: 100%; background-color: lightgray;"></view>
			<view class="info-item">
				<text>电话：{{phone}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				host_url: '',
				username: '',
				token: '',
				role: '1',
				name: '',
				college: '',
				major: '',
				phone: '',
				is_teacher: false
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.prepareData();
		},
		methods: {
			async prepareData() {
				await this.loadUserData();
				this.checkRole();
				this.getUserInfo();
			},
			loadUserData() {
				const errors = [];

				return new Promise((resolve, reject) => {
					let tokenPromise = this.getStorageData('token', 'token', errors);
					let usernamePromise = this.getStorageData('username', 'username', errors);
					let rolePromise = this.getStorageData('role', 'role', errors);

					Promise.all([tokenPromise, usernamePromise, rolePromise])
						.then(() => {
							if (errors.length > 0) {
								uni.navigateTo({
									url: '/pages/login/login'
								});
							} else {
								resolve();
							}
						})
						.catch((err) => {
							console.error('Promise.all failed with error:', err);
							reject(err);
						});
				});
			},
			getStorageData(key, dataName, errors) {
				return new Promise((resolve, reject) => {
					uni.getStorage({
						key: key,
						success: (res) => {
							this[dataName] = res.data;
							resolve();
						},
						fail: (res) => {
							errors.push(`${key} data retrieval failed.`);
							resolve();
						}
					});
				});
			},
			checkRole() {
				if (this.role != '1') {
					this.is_teacher = true;
				}
			},
			getUserInfo() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.host_url + 'members/user_info',
					method: 'POST',
					data: {
						username: this.username,
						token: this.token,
						role: this.role
					},
					success: (res) => {
						uni.hideLoading();
						if (res.statusCode != 200 && this.token != '') {
							uni.showToast({
								title: '登录信息过期',
								icon: 'error'
							});
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							}, 1000);
						} else {
							if (this.is_teacher) {
								this.name = res.data.name;
								this.phone = res.data.phone;
							} else {
								this.name = res.data.name;
								this.phone = res.data.phone;
								this.major = res.data.major;
								this.college = res.data.college;
							}
						}
					},
					fail: (res) => {
						uni.hideLoading();
						uni.showToast({
							title: '网络错误',
							icon: 'error'
						});
					}
				})
			},
		}
	}
</script>

<style>
	.info-box {
		margin: 0 auto;
		width: 93%;
		border-radius: 20rpx;
		background-color: white;
		height: auto;
	}

	.info-item {
		width: 90vw;
		padding: 10rpx 0 10rpx 0;
		height: 5vh;
		margin: 12rpx;
	}
</style>