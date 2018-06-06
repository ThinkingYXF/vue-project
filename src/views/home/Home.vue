<template>
	<div class="home">
		<el-row>
			<el-col :span="24" v-for="(item, index) in items" :key="index">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="item.src" class="image">
					<div style="padding: 14px;">
						<span>{{item.title}}</span>
						<div class="bottom clearfix">
							<time class="time">{{ item.intro }}</time>
							<el-button type="text" class="button" @click="getRates(item)">{{item.button}}</el-button>
							<el-rate v-model="item.rate" style="float: right"></el-rate>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script src="./home.js"></script>
<style scoped>
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
