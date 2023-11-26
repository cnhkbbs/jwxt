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
		},
		onShow() {
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
				await this.loadUserData();
				this.getGrades();
			},
			getGrades() {
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
						uni.showToast({
							title: '网络错误',
							icon: 'error'
						});
					}
				});
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
			}
		}
	}
</script>

<style>

</style>