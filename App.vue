<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// 全局变量
		globalData:{
			host_url: 'http://127.0.0.1:5000/'
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
