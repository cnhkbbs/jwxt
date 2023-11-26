<template>
	<view>
		<uni-section title="登记表" type="line">
			<view class="example">
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="详细地址">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="出生年月">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('customForm')">提交</button>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
