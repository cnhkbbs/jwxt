<template>
<<<<<<< HEAD
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
=======
<!-- 	<view class="content">
		<image class="logo" src="/static/touxiang.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view> -->
	<uni-card v-for="item in cards" :key="item">
		<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。{{item}}</text>
	</uni-card>

</template>			

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				cards: ['123456','abcdefg','一二三四五六七','12346578','12346579','123465710','123465711','123465712','123465713']
			}
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
		},
		onLoad() {

		},
<<<<<<< HEAD
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
=======
		methods: {
			
		}
	}
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
