<template>
	<view>
		<uni-table stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th>星期</uni-th>
				<uni-th>一</uni-th>
				<uni-th>二</uni-th>
				<uni-th>三</uni-th>
				<uni-th>四</uni-th>
				<uni-th>五</uni-th>
				<uni-th>六</uni-th>
				<uni-th>七</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index) in course_lists" :key="index">
				<uni-td>{{index+1}}</uni-td>
				<uni-td v-for="(subItem, subIndex) in item" :key="subIndex">
					{{subItem}}
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			this.loadUserData();
			setTimeout(() => {
				this.getCourse();
			}, 10);

		},
		onShow() {},
		data() {
			return {
				host_url: '',
				course_lists: [],
				token: '',
				username: ''
			}
		},
		methods: {
			getCourse() {
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
						uni.showToast({
							title: '网络错误',
							icon: 'error'
						});
					}
				});
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
						return 0;
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
	};
</script>

<style>
	.table-col {
		width: 10rpx;
	}
</style>