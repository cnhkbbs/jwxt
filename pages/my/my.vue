<template>
<<<<<<< HEAD
	<view class="login_box">
		<image class="item_icon1" src="../../static/logo.png" mode="" @click="goToGradesPage()()"></image>
	</view>
	<view>
		<uni-grid :column="4">
			<uni-grid-item class="grid-item">
				<image class="item_icon" src="../../static/logo.png" mode="" @click="goToGradesPage()()"></image>
				<text class="text">1</text>
			</uni-grid-item>
			<uni-grid-item class="grid-item">
				<image class="item_icon" src="../../static/logo.png" mode="" @click="goToCoursePage()"></image>
				<text class="text">2</text>
			</uni-grid-item>
			<uni-grid-item class="grid-item">
				<image class="item_icon" src="../../static/logo.png" mode="" @click="goToCoursePage()"></image>
				<text class="text">3</text>
			</uni-grid-item>
			<uni-grid-item class="grid-item">
				<image class="item_icon" src="../../static/logo.png" mode="" @click="goToCoursePage()"></image>
				<text class="text">4</text>
			</uni-grid-item>
		</uni-grid>
	</view>
	<view>
		<uni-section class="mb-10" title="留言">
			<template v-slot:right>
				right slot
			</template>
		</uni-section>
		<uni-section class="mb-10" title="问题与反馈">
			<template v-slot:right>
				right slot
			</template>
		</uni-section>
		<uni-section class="mb-10" title="设置">
			<template v-slot:right>
				right slot
			</template>
		</uni-section>
		<uni-section class="mb-10" title="关于我们">
			<template v-slot:right>
				right slot
			</template>
		</uni-section>
=======
	<view>
		<a>我的</a>
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
	</view>
</template>

<script>
	export default {
		data() {
<<<<<<< HEAD
			return {}
		},
		methods: {
			goToGradesPage() {
				uni.navigateTo({
					url: '/pages/grades/grades',
				});
			},
			goToCoursePage() {
				uni.navigateTo({
					url: '/pages/course/course',
				});
			}
=======
			return {
				
			}
		},
		methods: {
			
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
		}
	}
</script>

<style>
<<<<<<< HEAD
	.item_icon1 {
		width: 100%;
		height: 10rem;
	}

	.mb-10 {
		margin-top: 1rem;
		margin-bottom: 10px;
	}
</style>
=======

</style>
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
