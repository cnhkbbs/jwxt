<template>
	<view style="width: 100%;">
		<uni-table stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th>科目</uni-th>
				<uni-th>学分</uni-th>
				<uni-th>平时</uni-th>
				<uni-th>期中</uni-th>
				<uni-th>期末</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index) in grades_lists" :key="index">
				<uni-td v-for="(subItem, subIndex) in item" :key="subIndex">
					{{subItem}}
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		onLoad(opt) {
			this.host_url = getApp().globalData.host_url;
			this.studentid = opt.studentid;
			this.prepareData();
		},
		data() {
			return {
				host_url: '',
				token: '',
				username: '',
				role: '',
				grades_lists: {},
				studentid: ''
			}
		},

		methods: {
			async prepareData() {
				uni.showLoading({
					title: '加载中'
				});
				await this.loadUserData();
				this.getGrades();
				uni.hideLoading();
			},
			getGrades() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.host_url + 'grades/get_grades',
					method: 'POST',
					data: {
						token: this.token,
						username: this.username,
						role: this.role,
						student_id: this.studentid
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
							let res_data = res.data;
							res_data = res_data["grades"];
							const grades_lists = res_data
							this.$set(this, 'grades_lists', grades_lists);
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
			}
		}
	}
</script>

<style>

</style>