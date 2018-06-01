<template>
    <div class="header_container">

		<el-breadcrumb separator="/">


		</el-breadcrumb>
		<el-dropdown menu-align='start'>
			<div class="avator"><label>用户名：</label><span>Haivin</span></div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'

    export default {
    	data(){
    		return {
    		}
    	},
    	created(){

    	},
    	computed: {

    	},
		methods: {

		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
		margin-right: 50px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
