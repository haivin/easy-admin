<template>
    <div>
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
                               :size="ele.size"
                               :type="ele.type"
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
    import {getColumnData2,getData} from '../js/common/system.utils'
    var _this = {}
    export default {
        props: [
            'tableOperator',
            'pagination',
            'columnUrl',
            'dataUrl',
            'params',
        ],
        data() {
            return {
                _this: this,
                fullscreenLoading: false,
                tableData: [],
                tableTitle: [],
            }
        },
        mounted() {
            this._this = this
            _this = this
            this.initData()
        },
        methods: {
            initData: function () {
                getColumnData2(_this.columnUrl , function (data) {
                    _this.tableTitle = data.resultInfo.list
                    _this.getTableData()
                })
            },
            getTableData: function(){
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
