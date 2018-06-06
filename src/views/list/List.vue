<template>
	<div class="list">
		 <swiper :options="swiperOption">
			<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
				<img :src="slide.url" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item :title="item.name" :name="index1" v-for="(item, index1) in swiperSlides" :key="index1">
				<div>{{ item.dream }}</div>
				<div>{{ item.info }}</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script src="./list.js"></script>

<style>
.swiper-container {
	height: 30vh;
}
.swiper-container img{
	width: 100%;
	height: 100%;
}
.el-collapse-item__header, .el-collapse-item__content{
	padding-left: 2em;
}
</style>
