<template>
	<view class="article">
		<view class="app-info">
			<view class="logo">
				<image style="width: 150rpx; height: 150rpx;" src="../../static/logo.png" mode="aspectFit"></image>
				<text style="display: block;">云窗校园</text>
			</view>
			<view class="info-context">
				<text>1.0.0</text><br />
				<text>云窗智梦队</text>
			</view>
		</view>
		<view class="collapse-box">
			<uni-collapse>
				<uni-collapse-item title="版权信息">
					<view style="margin: 0 auto; width: 80vw;">
						<text>TabBar icon: </text>
						<uni-link href="https://github.com/Remix-Design/remixicon/blob/master/License" text="remixicon"></uni-link> <br />
						<text>插画 : </text>
						<uni-link href="https://www.manypixels.co/gallery" text="manypixels"></uni-link>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="服务协议">
					<view style="margin: 0 auto; width: 80vw;">
						<p>1、特别提示</p>
						<text style="word-wrap: break-word;">
							云窗校园应用（下称“本应用”）是由云窗校园服务中
							心开发和维护的移动信息平台，致力于全方位地为师
							生及相关人员提供优质的校园信息查询服务。用户可在xx大
							学（下称“学校”）允许的第三方移动应用中打开并使用本
							应用，安全便捷的获取校园信息、本应用提供的服务。如
							果您同意本条款，您可以进入本应用使用相关功能；如果
							您不同意本条款，请您停止使用并退出本应用页面。
						</text>
						<p>2、账户和密码</p>
						<text style="word-wrap: break-word;">
							本应用服务对象为校内师生及相关人员，账户的创建和注
							销由云窗校园统一管理。当师生及相关人员毕业
							或离职时，可自行申请解除绑定关系，云窗校园将
							依据相关规定注销您的账户信息。
						</text>
						<p>3、使用规则</p>
						<text style="word-wrap: break-word;">
							用户在使用本应用过程中，应当遵守相关的法律法规，包
							括但不仅限于《中华人民共和国宪法》《中华人民共和国刑
							法》《中华人民共和国民法通则》《中华人民共和国合同
							法》《中华人民共和国著作权法》《中华人民共和国电信条
							例》《互联网信息服务管理办法》《中华人民共和国保守国
							家秘密法》《中华人民共和国网络安全法》《中华人民共和
							国个人信息保护法》《中华人民共和国数据安全法》《中华
							人民共和国计算机信息系统安全保护条例》以及其相关的
							司法解释。
							用户在使用本应用过程中，需遵守所有与本网络服务有关
							的网络协议、规定和程序；不得进行任何可能对互联网的
							正常运转造成不良的行为；不得利用本应有进行任何不利
							于本学校的行为；不得试图利用技术和非技术手段，未经
							授权访问本校有关本应有的数据信息及用户资料。
							如果用户违反法律法规或本条款约定，导致学校或本应用
							产生任何损失，用户应自行承担责任。
						</text>
					</view>
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
	.article {
		width: 95%;
		margin: 0 auto;
	}

	.app-info {
		margin-top: 5%;
		width: 100%;
		height: auto;
	}

	.info-context {
		text-align: center;
	}

	.logo {
		text-align: center;
		margin: 0 auto;
		margin-bottom: 40%;
	}
</style>