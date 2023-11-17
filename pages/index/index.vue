<template>
	<view>
		<uni-card v-for="(item, index) in postList" :key="index" :cover="item.cover" @click="goToPostPage(item.title)">
			<text class="uni-body">{{ item.title }}</text>
		</uni-card>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.getPostList();
		},
		onLoad() {
			
			uni.getStorage({
				key:'token',
				success:function(res){
					console.log(res.data);
				},
				fail: (res) => {
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			})
			// uni.navigateTo({
			// 	url:'/pages/login/login'
			// })
		}, 
		data() {
			return {
				postList: []
			};
		},
		methods: {
			goToPostPage(title) {
				uni.navigateTo({
					url: '/pages/postpage/postpage?'+'title='+title,
				});
			},
			getPostList() {
				uni.request({
					url: 'http://127.0.0.1:5000/posts/list',
					method: 'POST',
					success: (res) => {
						const postList = res.data
						this.$set(this, 'postList', postList);
					},
					fail: (err) => {
						console.error('请求失败', err);
					}
				});
			}
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
