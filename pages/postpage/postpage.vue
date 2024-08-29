<template>
	<view class="article">
		<view class="post-title-box">
			<text class="post-title-text">{{title}}</text>
			<text style="font-size: 80%; color: darkgray;">{{post_data.author}}</text>
		</view>
		<view class="post-cover">
			<image style="width: 100%; height: 65vw;" :src="post_data.cover"></image>
		</view>
		<view class="post-content">
			<text class="post-content-text">{{post_data.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.getPostContent();
		},
		data() {
			return {
				title: '',
				host_url: '',
				post_data: ''
			}
		},
		onLoad(opt) {
			this.title = opt.title;
			this.host_url = getApp().globalData.host_url;
		},
		methods: {
			getPostContent() {
				uni.request({
					url: this.host_url+'posts/content',
					method: 'POST',
					data: {
						post_title: this.title,
					},
					success: (res) => {
						this.post_data = res.data;
					},
					fail: (err) => {
						console.error('err', err);
					}
				});
			}
		}
	}
</script>

<style>
	.article{
		margin: 0 auto;
		width: 98%;
		padding-bottom: 5vw;
	}
	.post-title-box{
		padding-left: 40rpx;
		padding-right: 40rpx;
		padding-bottom: 2vw;
	}
	.post-title-text {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		margin: 0 auto;
		text-align: left;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.post-cover{
		margin: 0 auto;
		border-radius: 20rpx;
		height: 60vw;
		width: 93%;
		overflow: hidden;
	}
	.post-content {
		width: 100%;
	}
	.post-content-text{
		display: block;
		padding-top: 7vw;
		padding-left: 40rpx;
		padding-right: 40rpx;
		width: auto;
		font-size: 105%;
		word-wrap: break-word;
	}
</style>