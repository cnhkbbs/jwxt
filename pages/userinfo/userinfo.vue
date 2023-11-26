<template>
	<view>
		<view class="info">
			<view class="info-box" v-show="!is_teacher">
				<view class="info-item">
					<text>姓名：{{name}}</text>
				</view>
				<view class="info-item">
					<text>电话：{{phone}}</text>
				</view>
				<view class="info-item">
					<text>学院：{{college}}</text>
				</view>
				<view class="info-item">
					<text>专业：{{major}}</text>
				</view>
			</view>
			<view class="info-box" v-show="is_teacher">
				<view class="info-item">
					<text>姓名：{{name}}</text>
				</view>
				<view class="info-item">
					<text>电话：{{phone}}</text>
				</view>
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
		},
		onShow() {
			uni.showLoading({
				title: '加载中'
			});
			this.prepareData();
			uni.hideLoading()
		},
		methods: {
			async prepareData() {
				await this.loadUserData();
				this.checkRole();
				this.getUserInfo();
			},
			loadUserData() {
				return new Promise((resolve) => {
					let tokenPromise = this.getStorageData('token', 'token');
					let usernamePromise = this.getStorageData('username', 'username');
					let rolePromise = this.getStorageData('role', 'role');
					Promise.all([tokenPromise, usernamePromise, rolePromise])
						.then(() => {
							resolve();
						})
						.catch(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							});
							resolve();
						});
				});
			},
			getStorageData(key, dataName) {
				return new Promise((resolve) => {
					uni.getStorage({
						key: key,
						success: (res) => {
							this[dataName] = res.data;
							resolve();
						},
						fail: (res) => {
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
				setTimeout(() => {
					uni.request({
						url: this.host_url + 'members/user_info',
						method: 'POST',
						data: {
							username: this.username,
							token: this.token,
							role: this.role
						},
						success: (res) => {
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
							uni.showToast({
								title: '网络错误',
								icon: 'error'
							});
						}
					})
				}, 10);
			},
		}
	}
</script>

<style>
.info-item{
	width: 90vw;
	border: red solid;
	margin: 12rpx;
}
</style>