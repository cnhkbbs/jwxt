<template>
	<view style="background-color: #f8f8f8; width: 100%; padding-top: 3vh;">
		<view class="message-box">
			<view class="no-message-box" v-show="show_no_message">
				<image style="width: 55vw; display: block; margin: 0 auto;" src="../../static/note-taking-isometric.png"
					mode="aspectFit"></image>
				<text>暂无消息</text>
			</view>
			<view class="message-list" v-show="!show_no_message">
				<text>{{message}}</text>
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
				show_no_message: false,
				message: ''
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.prepareData();
		},
		methods: {
			async prepareData() {
				await this.loadUserData();
				this.getMessage();
			},
			getMessage() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.host_url + 'message/',
					method: 'POST',
					data: {
						username: this.username,
						token: this.token
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
							if (res.data.count === 0) {
								this.show_no_message = true;
							} else {
								this.message = res.data.msg;
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
			loadUserData() {
				const errors = [];
				return new Promise((resolve, reject) => {
					let tokenPromise = this.getStorageData('token', 'token', errors);
					let usernamePromise = this.getStorageData('username', 'username', errors);
					Promise.all([tokenPromise, usernamePromise])
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
			}
		}
	}
</script>

<style>
	.message-box {
		width: 100vw;
		height: 100vh;
	}

	.no-message-box {
		text-align: center;
		margin: 0 auto;
		width: 90vw;
	}
</style>