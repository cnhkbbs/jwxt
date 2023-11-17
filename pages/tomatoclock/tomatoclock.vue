<template>
	<view class="charts-box">
		<qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData" :canvas2d="true" :animation="show_chart_animation" 
			canvasId="dXCwXFYykPudbpnyTCNtzAzQIuVstsYo" v-show="!show_set_time_box"/>
		<view id="count-down-table">
			<view class="count-down-number">
				{{remaining_hour}}
			</view>
			<view class="count-down-time-colon">
				:
			</view>
			<view class="count-down-number">
				{{remaining_minute}}
			</view>
			<view class="count-down-time-colon">
				:
			</view>
			<view class="count-down-number">
				{{remaining_second}}
			</view>
		</view>
		<view class="button-style" @click="countDownStop">
			放弃
		</view>
	</view>
	<uni-transition mode-class="slide-top" :show="show_set_time_box" id="set-time-box">
		<view class="time-setting">
			<uni-row>
				<uni-col>
					<image style="display: block; margin: 0 auto;" src="../../static/meditation-outline.png"
						mode="aspectFit"></image>
				</uni-col>
				<uni-col>
					<view id="time-setting-title-box">
						<text id="time-setting-title">设置时间开始专注吧</text><br />
						<text style="font-size: 70%;">享受那份源自内心的平静</text>
					</view>
				</uni-col>
				<uni-col>
					<view class="settting-time-col">
						<view class="time-setting-botton" @click="buttonClick(0, 20, 0, 1)"
							:class="{'button-selected': selected_button_num === 1}">
							<p class="time-setting-botton-first-line">20</p>
							<p class="time-setting-botton-second-line">分钟</p>
						</view>
						<view class="time-setting-botton" @click="buttonClick(0, 30, 0, 2)"
							:class="{'button-selected': selected_button_num === 2}">
							<p class="time-setting-botton-first-line">30</p>
							<p class="time-setting-botton-second-line">分钟</p>
						</view>
						<view class="time-setting-botton" @click="buttonClick(0, 45, 0, 3)"
							:class="{'button-selected': selected_button_num === 3}">
							<p class="time-setting-botton-first-line">45</p>
							<p class="time-setting-botton-second-line">分钟</p>
						</view>
					</view>
				</uni-col>
				<uni-col>
					<view class="settting-time-col">
						<view class="time-setting-botton" @click="buttonClick(1, 0, 0, 4)"
							:class="{'button-selected': selected_button_num === 4}">
							<p class="time-setting-botton-first-line">1</p>
							<p class="time-setting-botton-second-line">小时</p>
						</view>
						<view class="time-setting-botton" @click="buttonClick(1, 30, 0, 5)"
							:class="{'button-selected': selected_button_num === 5}">
							<p class="time-setting-botton-first-line">1.5</p>
							<p class="time-setting-botton-second-line">小时</p>
						</view>
						<view class="time-setting-botton" @click="buttonClick(2, 0, 0, 6)"
							:class="{'button-selected': selected_button_num === 6}">
							<p class="time-setting-botton-first-line">2</p>
							<p class="time-setting-botton-second-line">小时</p>
						</view>
					</view>
				</uni-col>
				<uni-col>
					<view class="button-style" @click="countDownStart">
						开启专注
					</view>
				</uni-col>
			</uni-row>
		</view>
	</uni-transition>
</template>

<script>
	export default {
		data() {
			return {
				count_down_hour: 0,
				count_down_minute: 25,
				count_down_second: 0,
				
				remaining_hour: 0,
				remaining_minute: 0,
				remaining_second: 0,
				
				timer: null,
				selected_button_num: 0,
				show_set_time_box: true,
				show_chart_animation: true,
				chartData: {
					series: [{
							name: "时",
							data: 0
						},
						{
							name: "分",
							data: 0
						},
						{
							name: "秒",
							data: 0
						}
					]
				},
				opts: {
					update: false,
					color: ["#1890FF", "#91CB74", "#FAC858"],
					title: {
						name: "专注",
						fontSize: 38,
						color: "#1890ff"
					},
					subtitle: {
						name: "是成功的关键",
						fontSize: 15,
						color: "#666666"
					},
					extra: {
						arcbar: {
							type: "circle",
							width: 16,
							backgroundColor: "#E9E9E9",
							startAngle: 1.5,
							endAngle: 0.25,
							gap: 5
						}
					}
				}
			};
		},
		onShow() {

		},
		methods: {
			buttonClick(hour, minute, second, button_num) {
				this.selected_button_num = button_num;
				this.count_down_hour = hour;
				this.count_down_second = second;
				this.count_down_minute = minute;
			},
			countDownStart() {
				//加载第一帧数据
				let res = {
					series: [{
							name: "秒",
							data: 1
						},
						{
							name: "分",
							data: 1
						},
						{
							name: "时",
							data: 1
						}
					]
				};
				this.chartData = res;
				setTimeout(() =>{
					this.changeChartStatues();
				},1000);
				this.show_set_time_box = !this.show_set_time_box;
				this.remaining_hour = this.count_down_hour;
				this.remaining_minute = this.count_down_minute;
				this.remaining_second = this.count_down_second;
				
				if (this.timer) {
					clearInterval(this.timer)
					this.timer = null
				}
				this.timer = setInterval(() => {
					this.updateCountdown()
				}, 1000)
			},
			countDownStop() {
				console.log('计时结束');
				clearInterval(this.timer);
				this.timer = null;
				this.show_set_time_box = !this.show_set_time_box;
				this.changeChartStatues();
			},
			changeChartStatues(){
				this.opts['update'] = !this.opts['update'];
				this.show_chart_animation = !this.show_chart_animation;
			},
			updateCountdown() {
				if (this.remaining_second > 0) {
					this.remaining_second -= 1;
				} else {
					if (this.remaining_minute > 0) {
						this.remaining_minute -= 1;
						this.remaining_second = 59;
					} else {
						if (this.remaining_hour > 0) {
							this.remaining_hour -= 1;
							this.remaining_minute = 59;
							this.remaining_second = 59;
						} else {
							uni.showToast({
								title: '时间到'
							})
							console.log('计时结束');
							clearInterval(this.timer);
							this.timer = null;
						}
					}
				}
				this.setCharData(this.remaining_hour, this.remaining_minute, this.remaining_second, this.count_down_hour);
			},
			setCharData(rema_hour, rema_minute, rema_second, coun_hour) {
				let res = {
					series: [{
							name: "秒",
							data: rema_second / 60
						},
						{
							name: "分",
							data: rema_minute / 60
						},
						{
							name: "时",
							data: rema_hour / coun_hour
						}
					]
				};
				this.chartData = res;
			}
		}
	};
</script>

<style>
	#time-setting-title-box {
		margin: 10% auto;
		width: 100%;
		text-align: center;
	}

	#time-setting-title {
		font-size: 150%;
	}
	#set-time-box{
		z-index: 999;
		float: left;
		background-color: white;
	}

	.charts-box {
		margin-top: 3%;
		width: 100%;
		height: auto;
		position: fixed;
		z-index: -1;
		text-align: center;
	}

	.time-setting-box {
		margin: 0 auto;
		text-align: center;
		padding-top: 2%;
		padding-bottom: 2%;
	}

	.settting-time-col {
		margin: 0 auto;
		text-align: center;
	}

	.time-setting-botton {
		width: 3rem;
		height: 3rem;
		margin: 2%;
		padding: 2%;
		border-radius: 25%;
		display: inline-block;
		font-size: 160%;
		text-align: center;
		background-color: gainsboro;
	}

	.time-setting-botton-first-line {
		line-height: 1;
	}

	.time-setting-botton-second-line {
		line-height: 1.5;
		font-size: 50%;
	}

	.button-selected {
		background-color: dodgerblue;
		color: white;
	}

	.button-style {
		width: 70%;
		height: 2rem;
		padding: 1%;
		margin: 0 auto;
		margin-top: 5%;
		font-size: 130%;
		color: white;
		text-align: center;
		background-color: dodgerblue;
	}

	#count-down-table {
		margin: 0 auto;
		padding-top: 9%;
		padding-bottom: 15%;
		text-align: center;
	}

	.count-down-number {
		width: 3rem;
		height: 3rem;
		margin: 2%;
		padding: 2%;
		border-radius: 25%;
		font-size: 180%;
		display: inline-block;
		color: white;
		background-color: dodgerblue;
	}

	.count-down-time-colon {
		color: black;
		font-size: 180%;
		display: inline-block;
	}
</style>
