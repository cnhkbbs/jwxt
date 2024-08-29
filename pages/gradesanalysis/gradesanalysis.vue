<template>
	<view class="charts">
		<view class="charts-title">所有成绩及格率</view>
		<qiun-data-charts type="arcbar" :opts="arcbar_opts" :chartData="arcbar_chartData" :canvas2d="true"
			canvasId="xLehDtwtzjlkEqFSFJjVpihSCFCxlACw" />
	</view>
	<view class="charts-grade">
		<view class="charts-title">各科成绩</view>
		<qiun-data-charts type="column" :opts="column_opts" :chartData="column_chartData" :canvas2d="true"
			canvasId="SktUEIBrIBHUGUhMhJyItaWvdlHPIQQZ" :in-scroll-view="true" />
	</view>
	<view class="select-item">
		<uni-data-select @change="changeCourse" v-model="selected_value" :localdata="selection_range"></uni-data-select>
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
				student_id: '',
				selected_value: 0,
				selection_range: [],
				grades_lists: [],
				grades_lists_length: 0,
				arcbar_chartData: {},
				column_chartData: {},
				arcbar_opts: {},
				column_opts: {
					color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 15, 0, 5],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						data: [{
							min: 0
						}]
					},
					extra: {
						column: {
							type: "group",
							width: 30,
							activeBgColor: "#000000",
							activeBgOpacity: 0.08,
							linearType: "custom",
							seriesGap: 5,
							linearOpacity: 0.5,
							barBorderCircle: true,
							customColor: [
								"#FA7D8D",
								"#EB88E2"
							]
						}
					}
				}
			}

		},
		methods: {
			async prepareData() {
				await this.loadUserData();
				await this.getGrades();
				this.getCourseList();
				this.getPassRate();
			},
			async getGrades() {
				return new Promise((resolve) => {
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
								})
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/login/login'
									})
								})
							} else {
								this.grades_lists = res.data["grades"];
								this.grades_lists_length = this.grades_lists.length
							}
							resolve();
						},
						fail: (res) => {
							uni.hideLoading();
							uni.showToast({
								title: '网络错误',
								icon: 'error'
							});
							resolve();
						}
					});
				});
			},
			changeCourse() {
				var selected = this.selected_value;
				let chart_data = {
					categories: [this.selection_range[selected].text],
					series: [{
							name: "平时",
							data: [this.grades_lists[selected][2]]
						},
						{
							name: "期中",
							data: [this.grades_lists[selected][3]]
						},
						{
							name: "期末",
							data: [this.grades_lists[selected][4]]
						}
					]
				}
				this.column_chartData = chart_data;
			},
			getCourseList() {
				var selection_range = [];
				for (var index = 0; index < this.grades_lists_length; index++) {
					selection_range.push({
						value: index,
						text: this.grades_lists[index][0]
					});
				}
				this.selection_range = selection_range;
				this.changeCourse();
			},
			getPassRate() {
				var course_count = this.grades_lists_length;
				var pass_course_count = 0;
				for (var index = 0; index < course_count; index++) {
					if (this.grades_lists[index][4] >= 60) {
						pass_course_count++;
					}
				}
				var pass_rate = pass_course_count / course_count
				var pass_rate_percent = pass_rate * 100
				let pass_rate_str = pass_rate_percent.toString();
				let res = {
					series: [{
						name: "及格率",
						color: "#2fc25b",
						data: pass_rate
					}]
				};
				let arcbar_opt = {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					title: {
						name: pass_rate_str + '%',
						fontSize: 35,
						color: "#2fc25b"
					},
					subtitle: {
						name: "及格率",
						fontSize: 25,
						color: "#666666"
					},
					extra: {
						arcbar: {
							type: "default",
							width: 12,
							backgroundColor: "#E9E9E9",
							startAngle: 0.75,
							endAngle: 0.25,
							gap: 2,
							linearType: "custom"
						}
					}
				};
				this.arcbar_opts = JSON.parse(JSON.stringify(arcbar_opt));
				this.arcbar_chartData = JSON.parse(JSON.stringify(res));
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
	.charts {
		width: 100vw;
	}

	.charts-grade {
		width: 100vw;
		margin-bottom: 50rpx;
	}

	.charts-title {
		text-align: center;
		margin: 50rpx 0;
		font-weight: 700;
	}

	.select-item {
		width: 100vw;
		height: 50vh;
	}
</style>