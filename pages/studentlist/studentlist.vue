<template>
	<view class="list-box">
		<view class="list-item" v-for="(value, key) in student_list" :key="key" @click="goNext(key)">
			<p>{{ value }}</p>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(opt) {
			this.host_url = getApp().globalData.host_url;
			this.refer = opt.refer;
		},
		onShow() {
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
			goNext(key){
				if(this.refer === 'grades'){
					this.goToGradesPage(key);
				}else if(this.refer === 'analysis'){
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
				return new Promise((resolve) => {
					let tokenPromise = this.getStorageData('token', 'token');
					let usernamePromise = this.getStorageData('username', 'username');
					Promise.all([tokenPromise, usernamePromise])
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
			getStudentList() {
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
	.list-item{
		width: 90vw;
		border: red solid;
		margin: 12rpx;
	}
</style>