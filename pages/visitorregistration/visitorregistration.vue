<template>
	<view>
		<uni-section title="来访登记表" type="line">
			<view class="example">
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="证件类型" required>
						<uni-data-select v-model="baseFormData.id_type" :localdata="id_type"></uni-data-select>
					</uni-forms-item>
					<uni-forms-item label="证件号码" required>
						<uni-easyinput v-model="baseFormData.id" placeholder="证件号码" />
					</uni-forms-item>
					<uni-forms-item label="来访事由">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入来访事由" />
					</uni-forms-item>
					<uni-forms-item label="预约来访时间">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submitForm">提交</button>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				host_url: '',
				baseFormData: {
					name: '',
					age: '',
					sex: 3,
					id: '',
					id_type: 1,
					datetimesingle: 1627529992399
				},
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],

				id_type: [{
						value: 1,
						text: "居民身份证"
					},
					{
						value: 2,
						text: "临时身份证"
					},
					{
						value: 3,
						text: "护照"
					},
					{
						value: 4,
						text: "港澳居民来往内地通行证"
					},
				]
			}
		},
		onLoad() {
			this.host_url = getApp().globalData.host_url;
		},
		methods: {
			submitForm() {
				uni.request({
					url: this.host_url + '/visitor_registration',
					method: 'POST',
					data: this.baseFormData,
					success: (res) => {
						uni.showToast({
							title: res.data.msg
						})
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}, 1000)
					}
				})
			}
		}
	}
</script>

<style>

</style>