<template>
    <div class="fillcontain" style="padding: 15px;">
        <div class="navTop" style="margin-bottom: 15px">
            系统管理
        </div>
        <div class="fillcontain">
            <template>
                <el-table
                    :data="tableData"
                    border
                    stripe
                    style="width: 98%;margin-bottom: 10px">
                    <el-table-column  v-for="(item, index) in tableTitle" :key="index"
                        :prop="item.entityName"
                        :label="item.title">
                    </el-table-column>
                    <el-table-column label="操作" v-if="tableTitle.length>0 && tableOperator && tableOperator instanceof Array && tableOperator.length>0">
                        <template slot-scope="scope">
                            <el-button  v-for="(ele, i) in tableOperator" :key="i"
                                :size="ele.size"
                                :type="ele.type"
                                @click="config.handle(_this,ele.action,scope.$index, scope.row)">{{ele.text}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="config.moduleConfig.currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="config.moduleConfig.pageSize"
                    :layout="config.moduleConfig.layout"
                    :total="config.moduleConfig.total">
                </el-pagination>
            </template>
        </div>
    </div>
</template>

<style>
    .el-form-item__label{
        width: 8%;
    }
    .el-input{
        width: 80%;
    }

</style>

<script type="text/ecmascript-6">
//    import * as conf from '../../js/system/list.system.table'
    import * as confMap from '../../js/common/list.map'
    var conf = {}
    export default {
        props: {
            moduleConfig:{
                type: String,
                default: 'default'
            }
        },
        data(){
            conf = confMap.getConfig(this.moduleConfig)
            console.debug(this.moduleConfig)
            console.debug(conf)
            return {
                tableTitle:[],
                _this:this,
                config:conf,
                tableData:[],
                tableOperator: [],
            }
        },
        mounted() {
            this.initData()
        },
        created(){
        },
        methods: {
            initData: function () {
                this.tableOperator = conf.moduleConfig.tableOperator
                this._this = this
//                let params = this.$route.params
//                let ids = [params.tableId ? params.tableId : conf.tableId]
                conf.getColumnData(this, function (data,obj) {
                    obj.tableTitle = data.resultInfo.list
                    obj.getData()
                })
            },
            getData: function () {
                conf.getData(this,function (data,obj) {
                    obj.tableData = data.resultInfo.list
                    conf.moduleConfig.total = data.resultInfo.total
                })
            },
            // 表格每页个数变化
            handleSizeChange: function (val) {
                console.log(`每页 ${val} 条`);
            },
            // 表格当前页变化
            handleCurrentChange: function (val) {
                console.log(`当前页: ${val}`);
                conf.moduleConfig.currentPage = val
                this.getData()
            },
        },
    }
</script>

