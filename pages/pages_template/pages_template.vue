<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				host_url: '',
				token: ''
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
			//检查是否登录
			uni.getStorage({
				key:'token',
				success:function(res){
					this.token = res.data;
				},
				fail: (res) => {
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
