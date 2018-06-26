<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4" style="min-height: 100%; background-color: #324057;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-document"></i>系统管理</template>
                        <el-menu-item index="/system/table">系统表</el-menu-item>
                        <el-menu-item index="/system/menu">菜单管理</el-menu-item>
                        <el-menu-item index="/system/view">页面管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: auto;">
                <head-top></head-top>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
//    import {getColumnData} from '../js/common/system.utils'
    export default {

//        mounted() {
//            getColumnData('/system/table/${tableId}/column',{'tableId':'772307719036981248'})
//        },
        computed: {
            defaultActive: function () {
                return this.$route.path;
            }
        },
        components: {
            headTop,
        },
    }
</script>

