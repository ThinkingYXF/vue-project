<template>
	<div class="myInfo">
		<header>
			<img src="/src/assets/icon.jpg" alt="">
			<p>个人简介</p>
			<p>卡拉四大皆空速度和</p>
		</header>
		<div class="myNav">
			<el-row>
				<el-col :span="8">
					<i class="el-icon-date"></i>
					<span>日期</span>
				</el-col>
				<el-col :span="8">
					<i class="el-icon-star-on"></i>
					<span>收藏</span>
				</el-col>
				<el-col :span="8">
					<i class="el-icon-location"></i>
					<span>位置</span>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
					<i class="el-icon-service"></i>
					<span>音乐</span>
				</el-col>
				<el-col :span="8">
					<i class="el-icon-picture"></i>
					<span>图片</span>
				</el-col>
				<el-col :span="8">
					<i class="el-icon-share"></i>
					<span>分享</span>
				</el-col>
			</el-row>
		</div>

		<baidu-map class="map" :center="center" :zoom="zoom" @ready="handler" v-if="false">
			<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
			<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		</baidu-map>

		<el-tag type="success" style="margin: 10px 0">三级联动</el-tag>
		<div class="cascader">
			<el-row>
				<el-col :span="8">
					<el-select v-model="value" placeholder="请选择" @change="changeProvince">
						<el-option
						v-for="item in province"
						:key="item.name"
						:label="item.name"
						:value="item.name">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="8">
					<el-select v-model="value1" placeholder="请选择" @change="changeCity">
						<el-option
						v-for="item in cities"
						:key="item.name"
						:label="item.name"
						:value="item.name">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="8">
					<el-select v-model="value2" placeholder="请选择">
						<el-option
						v-for="item in areas"
						:key="item"
						:label="item"
						:value="item">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script src="./me.js"></script>

<style scoped>
.myInfo > header{
	height: 25vh;
	background: lightseagreen;
	color: #fff;
	padding-top: 5vh;
	text-align: center;
}
.myInfo > header img{
	display: block;
	margin: auto;
	width: 70px;
	height: 70px;
	border-radius: 50%;
}
.myInfo > header p{
	padding: 0 20vw;
	margin: 5px;
}
.myNav > .el-row > .el-col{
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	text-align: center;
	height: 10vh;
	padding: 10px;
}
.myNav > .el-row > .el-col:nth-last-child(1){
	border-right: none;
}
.myNav > .el-row > .el-col > i{
	display: block;
}
.map{
	width: 100%;
	height: 30vh;
}
</style>
