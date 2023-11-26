<template>
	<view class="article">
		<view class="app-info">
			<view class="logo">
				<image  style="width: 150rpx; height: 150rpx;" src="../../static/logo.png" mode="aspectFit"></image>
				<text style="display: block;">小程序名字</text>
			</view>
			<view class="info-context">
				<text>123456789</text>
			</view>
		</view>
		<view class="collapse-box">
			<uni-collapse>
				<uni-collapse-item title="版权信息">
					<text>TabBar icon: remixicon</text><br />
					<text>插画 : manypixels</text>
				</uni-collapse-item>
				<uni-collapse-item title="隐私相关">
					<text>TabBar icon: remixicon</text>
				</uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.article{
	width: 95%;
	margin: 0 auto;
}
.app-info{
	margin-top: 5%;
	width: 100%;
	height: auto;
}
.info-context{
	text-align: center;
}
.logo{
	text-align: center;
	margin: 0 auto;
	margin-bottom: 40%;
}
</style>