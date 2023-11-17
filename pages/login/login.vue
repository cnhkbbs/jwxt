<template>
	<view class="main">
		<view class="form">
			<!-- <view><h1 style="font-weight: 600;text-align: center;">欢迎来到教务系统</h1></view> -->
			<view class="tabs">
				<view>
					<view @click="formData.role = 1" :class="formData.role === 1 ? 'checked' : ''">学生登录</view>
				</view>
				<view>
					<view @click="formData.role = 2" :class="formData.role === 2 ? 'checked' : ''">教师登录</view>
				</view>
			</view>
			<!-- <view style="margin-bottom: 10rpx;border: 1rpx #cccccc50 solid;"></view> -->
			<view style="margin-top: 20rpx;">
				<view style="padding: 20rpx;box-sizing: border-box;">
					<input class="uni-input" v-model="formData.username" placeholder="请输入手机号/学号"
						style="border-bottom: 2rpx solid #c3c3c3;padding: 10rpx 0rpx;" />
				</view>
				<view style="padding: 20rpx;box-sizing: border-box;">
					<input class="uni-input" type="password" v-model="formData.password" placeholder="请输入登录密码"
						style="border-bottom: 2rpx solid #c3c3c3;padding: 10rpx 0rpx;" />
				</view>
			</view>

			<view style="margin-top: 60rpx;">
				<button type="primary" @click="submit" style="background-color: #409EFF;">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username: '',
					password: '',
					role: 1,
					host_url: ''
				}
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
		},
		methods: {
			submit() {
				// const data = new FormData()
				// data.append('username', this.formData.username)
				// data.append('password', this.formData.password)
				// data.append('role', this.formData.role)
				if (this.formData.username === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入账号'
					})
				} else if (this.formData.password === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					})
				} else {
					uni.request({
						url: this.host_url + 'auth/login',
						method: 'POST',
						data: '\r\n--XXX' +
							'\r\nContent-Disposition: form-data; name="username"' +
							'\r\n' +
							`\r\n${this.formData.username}` +
							'\r\n--XXX' +
							'\r\nContent-Disposition: form-data; name="password"' +
							'\r\n' +
							`\r\n${this.formData.password}` +
							'\r\n--XXX' +
							'\r\nContent-Disposition: form-data; name="role"' +
							'\r\n' +
							`\r\n${this.formData.role}` +
							'\r\n--XXX--',
						header: {
							'content-type': 'multipart/form-data; boundary=XXX'
						},
						success: (res) => {
							const {
								data
							} = res
							uni.showToast({
								icon: 'none',
								title: data.msg,
								success: () => {
									if (data.token) {
										uni.setStorage({
											key: 'token',
											data: data.token
										});
										uni.setStorage({
											key: 'token',
											data: data.token
										});
										uni.switchTab({
											url: '/pages/index/index'
										});
									}
								}
							})
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		width: 100vw;
		height: 100vh;
		background-color: #ededed;
		display: flex;
		justify-content: center;

		.form {
			margin-top: 200rpx;
			height: 350rpx;
			background-color: #fff;
			width: 90%;
			border-radius: 10rpx;
			padding: 10rpx;
			box-sizing: border-box;
			box-shadow: 0 0 4rpx #b0b0b0;

			.tabs {
				height: 50rpx;
				margin-top: 30rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;

				&>view {
					text-align: center;
					padding: 30rpx 80rpx;
					box-sizing: border-box;

					view {
						padding-bottom: 10rpx;
					}
				}

				.checked {
					border-bottom: 2rpx solid #409EFF;
					color: #409EFF;
				}
			}
		}
	}
</style>