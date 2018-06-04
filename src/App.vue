<template>
	<div id="app">
		<router-view/>

		<el-footer>
			<!-- {{tabs}} -->
			<div class="el-footer-cells" id="myTabs">
				<div class="el-footer-cell" v-for="(item, index) in tabs" :key="index" :class="{'el-footer-cell-active': (nowLocation==index)}" @click="clickTabs(index)">
					<router-link :to="item.path">
						<i :class="item.icon"></i>
						<span>{{ item.content }}</span>
					</router-link>
				</div>
			</div>
		</el-footer>
	</div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			nowLocation: 0,
			tabs: [{
				path: '/chat',
				icon: 'el-icon-tickets',
				content: '主页'
			},{
				path: '/list',
				icon: 'el-icon-star-off',
				content: '列表'
			},{
				path: '/me',
				icon: 'el-icon-setting',
				content: '我'
			}]
		}
	},
	methods: {
		clickTabs: function(index){
			this.nowLocation = index;
		}
	}
}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	footer{
		position: absolute;
		bottom: 0;
		background: #f7f7fa;
		width: 100%;
		padding: 0;
	}
	.el-footer-cells{
		display: flex;
	}
	.el-footer-cells > .el-footer-cell{
		flex: 1;
		text-align: center;
		padding: 10px 0;
	}
	.el-footer-cell i{
		display: block;
	}
	.el-footer-cell > a{
		text-decoration: none;
	}
	.el-footer-cell-active > a{
		color: #04BE02;
	}
</style>
