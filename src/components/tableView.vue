<template>
    <div>
        <el-form v-if="hasFilter" :inline="true" label-position="right" label-width="70px" :model="params">
            <el-form-item v-for="(label,index) in labels" :key="index"
                          :prop="label.propertyName" :label="label.title"
                          v-if="label.type in {'text':'','password':'','color':'','date':'',
                          'datetime':'','datetime-local':'','month':'','week':'','time':'',
                          'email':'','hidden':'','number':'','tel':'','url':''}">
                <el-input :readonly="false" type="label.type" placeholder="请输入内容"
                          v-model="params[label.propertyName]"></el-input>
            </el-form-item>
            <el-row type="flex" justify="end" style="width: 98%;margin-bottom: 10px">
                <el-button v-for="(ele, i) in filterOperator" :key="i"
                           :size="ele.size"
                           :type="ele.type"
                           @click="ele.click(_this,params,getTableData)">
                    {{ele.text}}
                </el-button>
            </el-row>
        </el-form>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 98%;margin-bottom: 10px">
            <el-table-column v-for="(item, index) in tableTitle" :key="index"
                             :prop="item.propertyName"
                             :label="item.title">
            </el-table-column>
            <el-table-column label="操作"
                             v-if="tableTitle.length>0 && tableOperator && tableOperator instanceof Array && tableOperator.length>0">
                <template slot-scope="scope">
                    <el-button v-for="(ele, i) in tableOperator" :key="i"
                               :size="ele.size" :type="ele.type"
                               @click="ele.click(_this,scope.$index, scope.row)"
                    >{{ele.text}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.pageNum"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pagination.pageSize"
            :layout="pagination.layout"
            :total="pagination.total">
        </el-pagination>
    </div>
</template>

<script type="text/ecmascript-6">
    import {getColumnData,getData} from '../js/common/system.utils'
    import {pagination} from '../js/common/default.conf'
    var _this = {}
    export default {
        props: [
            'filterLableUrl',
            'filterOperator',
            'columnUrl',
            'dataUrl',
            'tableOperator',
            'params',
            'hasFilter',
        ],
        data() {
            return {
                _this: this,
                fullscreenLoading: false,
                tableData: [],
                tableTitle: [],
                labels: [],
                pagination: pagination,
            }
        },
        mounted() {
            this._this = this
            this.pagination = pagination
            _this = this
            this.initData()
        },
        methods: {
            initData: function () {
                if(this.hasFilter){
                    getData(_this.filterLableUrl,{},function (data) {
                        _this.labels = data.resultInfo.list
                    })
                }
                getColumnData(_this.columnUrl , function (data) {
                    _this.tableTitle = data.resultInfo.list
                    _this.getTableData()
                })
            },
            getTableData: function(){
                for (let key in _this.params) {
                    if(_this.params[key]==""){
                        delete _this.params[key]
                    }
                }
                _this.params['pageSize'] = pagination.pageSize
                _this.params['pageNum'] = pagination.pageNum
                getData(_this.dataUrl,_this.params,function (data) {
                    _this.tableData = data.resultInfo.list
                    _this.pagination.total = data.resultInfo.total
                })
            },

            // 表格每页个数变化
            handleSizeChange: function (val) {
                console.log(`每页 ${val} 条`);
            },
            // 表格当前页变化
            handleCurrentChange: function (val) {
                console.log(`当前页: ${val}`);
                _this.pagination.pageNum = val
                _this.params["pageNum"] = val
                this.getTableData()
            },
        }
    }

</script>
