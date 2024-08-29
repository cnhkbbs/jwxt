<template>
	<view class="list-item" v-for="(value, key) in student_list" :key="key" @click="goNext(key)">
		<p>{{ key }}</p>
		<p style="width: 50%;">{{ value }}</p>
		<p><uni-icons type="right" size="26"></uni-icons></p>
	</view>
</template>

<script>
	export default {
		onLoad(opt) {
			this.host_url = getApp().globalData.host_url;
			this.refer = opt.refer;
			this.prepareData();
		},
		data() {
			return {
				host_url: '',
				student_list: [],
				token: '',
				username: '',
				refer: ''
			}
		},
		methods: {
			goNext(key) {
				if (this.refer === 'grades') {
					this.goToGradesPage(key);
				} else if (this.refer === 'analysis') {
					this.goToGradesAnalysisPage(key);
				}
			},
			goToGradesPage(stuid) {
				uni.navigateTo({
					url: '/pages/grades/grades?studentid=' + stuid,
				});
			},
			goToGradesAnalysisPage(stuid) {
				uni.navigateTo({
					url: '/pages/gradesanalysis/gradesanalysis?studentid=' + stuid
				})
			},
			async prepareData() {
				await this.loadUserData();
				this.getStudentList();
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
			},
			getStudentList() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.host_url + 'members/get_students',
					method: 'POST',
					data: {
						token: this.token,
						username: this.username
					},
					header: {
						'content-type': 'application/json'
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
							const student_list = res.data
							this.$set(this, 'student_list', student_list);
						}
					},
					fail: (res) => {
						uni.hideLoading();
						console.log(res.data);
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				});
			}
		}
	};
</script>

<style>
	.list-box {
		padding: 10rpx 30rpx;
	}

	.list-item {
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		padding: 10rpx 0;
	}
</style>