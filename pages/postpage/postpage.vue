<template>
	<view id="article">
		<view>
			<text id="post_title">{{title}}</text>
		</view>
		<view id="post_cover">
			图片
		</view>
		<view id="post_content">
			<text>{{post_content}}</text>
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
				post_content: {}
			}
		},
		onLoad(opt) {
			this.title = opt.title;

		},
		methods: {
			getPostContent() {
				uni.request({
					url: 'http://127.0.0.1:5000/posts/content',
					method: 'POST',
					data: {
						post_title: this.title,
					},
					success: (res) => {
						let res_data = res.data;
						res_data = res_data["content"];
						res_data = res_data.replace(/\n/g, '\n');
						const post_content = res_data;
						this.$set(this, 'post_content', post_content);
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
	#article{
		background-color: lightblue;
	}
	#post_title {
		display: block;
		font-size: 1.5rem;
		margin: 0 auto;
		text-align: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	#post_content {
		background-color: white;
		margin: 1rem;
		padding: 0.5rem;
		border: 0.1rem solid black;
	}
</style>