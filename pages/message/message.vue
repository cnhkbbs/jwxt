<template>
	<view>
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
			this.loadUserData();
		},
		onShow() {
			this.getMessage();
		},
		methods: {
			getMessage() {
				setTimeout(() => {
					uni.request({
						url: this.host_url + 'message',
						method: 'POST',
						data: {
							username: this.username,
							token: this.token
						},
						success: (res) => {
							if (res.statusCode != 200 && this.token != ''){
								uni.showToast({
									title: '登录信息过期',
									icon: 'error'
								});
								setTimeout(()=>{
									uni.navigateTo({
										url: '/pages/login/login'
									})
								},1000);
							}else{
								if(res.data.count === 0){
									this.show_no_message = true;
								}else{
									this.message = res.data.msg;
								}
							}
						},
						fail: (res) => {
							uni.showToast({
								title: '网络错误',
								icon: 'error'
							});
						}
					})
				}, 10);

			},
			loadUserData() {
				//检查是否登录
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