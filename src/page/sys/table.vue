<template>
    <div class="fillcontain" style="padding: 15px;">
        <div class="navTop" style="margin-bottom: 15px">
            系统管理
        </div>
        <div class="fillcontain">
            <table-view :columnUrl="columnUrl" :dataUrl="dataUrl"
                :tableOperator="tableOperator"
                :pagination="pagination" :params="params"></table-view>
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
    import * as confMap from '../../js/common/list.map'
    import {buildUrl} from '../../js/common/system.utils'
    import tableView from '../../components/tableView.vue'
    var conf = {}
    var _this
    var params = {}
    export default {
        props: {
            moduleConfig:{
                type: String,
                default: 'default'
            }
        },
        data(){
            conf = confMap.getConfig(this.moduleConfig)
            params['pageNum'] = conf.moduleConfig.pagination.pageNum
            params['pageSize'] = conf.moduleConfig.pagination.pageSize
            let tableOperator = conf.moduleConfig.tableOperator
            let tableId = conf.moduleConfig.tableId || this.$route.params['tableId']
                || this.$route.query['tableId']
            let columnUrl = buildUrl(conf.moduleConfig.columnUrl,{'tableId':tableId})
            tableId = this.$route.params['tableId'] || this.$route.query['tableId']
                || conf.moduleConfig.tableId
            params["tableId"] = tableId
            let dataUrl = buildUrl(conf.moduleConfig.dataUrl,params,this.$route)
            return {
                tableOperator: tableOperator,
                pagination:conf.moduleConfig.pagination,
                columnUrl: columnUrl,
                dataUrl: dataUrl,
                params: params,
            }
        },
        mounted() {
        },
        created(){
        },
        methods: {
        },
        components: {
            tableView,
        }
    }
</script>

