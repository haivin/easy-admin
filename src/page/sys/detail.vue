<template>
    <div class="fillcontain" style="padding: 15px;">
        <div class="navTop" style="margin-bottom: 15px">
            系统管理
        </div>
        <div class="fillcontain">
            <template>
                <form-view :columnUrl="columnUrl" :detailUrl="detailUrl" :editable="editable"
                           :params="params" :operator="operator" :conf="conf" :saveUrl="saveUrl"
                           :formHandle="formHandle"></form-view>
            </template>
        </div>
    </div>
</template>

<style>
    .el-form-item__label {
        width: 8%;
    }

    .el-input {
        width: 80%
    }

    .el-button {
        margin-left: 8%;
    }

</style>

<script type="text/ecmascript-6">
    //    import * as conf from '../../js/system/detail.system.table'
    import * as confMap from '../../js/common/list.map'
    import formView from '../../components/formView'
    import {getColumnData,getDetailData,saveData,formHandle,buildUrl} from '../../js/common/system.utils'

    var conf = {}
    var params = {}
    export default {
        props: {
            moduleConfig: {
                type: String,
                default: 'default'
            },
            editable: {
                type: Boolean,
                default: false
            }
        },
        data(){
            conf = confMap.getConfig(this.moduleConfig)
            let operator = conf.moduleConfig.operator
            let tableId = conf.moduleConfig.tableId || this.$route.params['tableId']
                || this.$route.query['tableId']
            let columnUrl = buildUrl(conf.moduleConfig.columnUrl,{'tableId':tableId})
            tableId = this.$route.params['tableId'] || this.$route.query['tableId']
                || conf.moduleConfig.tableId
            params["tableId"] = tableId
            let detailUrl = buildUrl(conf.moduleConfig.detailUrl,params,this.$route)
            let saveUrl = buildUrl(conf.moduleConfig.saveUrl,params,this.$route)
            return {
                conf:conf,
                formHandle:formHandle,
                operator: operator,
                columnUrl: columnUrl,
                detailUrl: detailUrl,
                saveUrl: saveUrl,
                params: params,
            }
        },
        mounted() {
        },
        created() {
        },
        methods: {
        },
        components: {
            formView,
        }
    }
</script>

