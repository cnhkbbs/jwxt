<template>
	<view>
		<view class="table-list">
			<view class="table-item">
				<view class="table-item-text">星期</view>
				<view class="table-item-text">
					<view>一</view>
				</view>
				<view class="table-item-text">
					<view>二</view>
				</view>
				<view class="table-item-text">
					<view>三</view>
				</view>
				<view class="table-item-text">
					<view>四</view>
				</view>
				<view class="table-item-text">
					<view>五</view>
				</view>
				<view class="table-item-text">
					<view>六</view>
				</view>
				<view class="table-item-text">
					<view>日</view>
				</view>
			</view>
			<view class="table-item" v-for="(item,index) in course_lists" :key="index">
				<view class="table-item-text">
					{{index+1}}
				</view>
				<view class="table-item-text-course" v-for="(subitem,i) in item" :key="i">
					<view v-if="subitem === ''">

					</view>
					<view v-else>
						{{subitem}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.prepareData();
		},
		data() {
			return {
				host_url: '',
				course_lists: [],
				token: '',
				username: ''
			}
		},
		methods: {
			async prepareData() {
				await this.loadUserData();
				this.getCourse();
			},
			getCourse() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.host_url + 'courses/get_courses',
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
							})
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							})
						} else {
							const course_lists = res.data
							this.$set(this, 'course_lists', course_lists);
						}
					},
					fail: (res) => {
						uni.hideLoading();
						uni.showToast({
							title: '网络错误',
							icon: 'error'
						});
					}
				});
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
	};
</script>

<style>
	.table-col {
		width: 10rpx;
	}

	.table-list {}

	.table-item {
		display: flex;
		/* justify-content: space-between; */
	}

	.table-item-text {
		max-width: 12.5vw;
		width: 15vw;
		height: 150rpx;
		text-align: center;
		padding: 20rpx 0;
		box-sizing: border-box;
		overflow-wrap: break-word;
		word-wrap: break-word;
		border: 1px solid #ccc;
	}

	.table-item-text-course {
		font-size: 60%;
		max-width: 12.5vw;
		width: 15vw;
		height: 150rpx;
		text-align: center;
		padding: 20rpx 0;
		box-sizing: border-box;
		overflow-wrap: break-word;
		word-wrap: break-word;
		border: 1px solid #ccc;
	}
</style>