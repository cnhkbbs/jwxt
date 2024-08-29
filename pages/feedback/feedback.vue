<template>
	<view class="feedback-article">
		<image src="../../static/customer-service-outline-494a2.png" mode="aspectFit"></image>
		<uni-forms>
			<uni-forms-item>
				<uni-easyinput type="textarea" v-model="feedback_text" placeholder="写下您的建议或意见吧(●'◡'●)" />
				<text v-show="show_warming" style="color: red; font-size: 70%;">输入内容必须大于五个字符</text>
			</uni-forms-item>
		</uni-forms>
		<button class="submit-button" @click="submitFeedback">提交反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				host_url: '',
				feedback_text: '',
				show_warming: false,
				username: '',
				token: ''
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.loadUserData();
		},
		methods: {
			checkInput() {
				if (this.feedback_text.length <= 5) {
					this.show_warming = true;
					return false;
				} else {
					this.show_warming = false;
					return true;
				}
			},
			loadUserData() {
				uni.getStorage({
					key: 'token',
					success: (res) => {
						this.token = res.data;
					},
					fail: (res) => {
						uni.navigateTo({
							url: '/pages/login/login'
						})
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
			},
			submitFeedback() {
				if (this.checkInput()) {
					uni.request({
						url: this.host_url + 'feedback/',
						method: 'POST',
						data: {
							username: this.username,
							token: this.token,
							msg: this.feedback_text
						},
						header: {
							'content-type': 'application/json'
						},
						success: (res) => {
							if (res.statusCode != 200 && this.token != '') {
								uni.showToast({
									title: '登录信息过期',
									icon: 'error'
								})
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/login/login'
									})
								}, 1000)
							} else {
								uni.showToast({
									title: res.data.msg
								})
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/my/my'
									});
								}, 1000)
							}
						},
						fail: (res) => {
							uni.showToast({
								title: '网络错误',
								icon: 'error'
							});
						}
					})
				}

			}

		}
	}
</script>

<style>
	.submit-button {
		text-align: center;
		border: none;
		color: white;
		background-color: dodgerblue;
	}

	.feedback-article {
		text-align: center;
		margin: 0 auto;
		padding-top: 2%;
		width: 97%;
	}
</style>