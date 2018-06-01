<template>
    <div class="fillcontain" style="padding: 15px;" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="navTop" style="margin-bottom: 15px">
            系统管理
        </div>
        <div class="fillcontain">
            <template>
                <el-form>
                    <div v-for="label in labels">
                        <el-form-item :label="label.title" prop="age"
                                      v-if="label.type in {'text':'','password':'','color':'','date':'','datetime':'','datetime-local':'','month':'','week':'','time':'','email':'','hidden':'','number':'','tel':'','url':''}">
                            <el-input :readonly="false" type="label.type" placeholder="请输入内容"
                                      v-model="detail[label.entityName]"></el-input>
                        </el-form-item>
                    </div>
                    <el-button v-if="editable" v-for="(ele, i) in operator" :key="i"
                               :size="ele.size"
                               :type="ele.type"
                               @click="conf.detailHandle(_this,ele.action,detail)">{{ele.text}}
                    </el-button>
                </el-form>


                <!--<div class="layui-input-block" v-if="label.type in {'text':'','password':'','color':'','date':'','datetime':'','datetime-local':'','month':'','week':'','time':'','email':'','hidden':'','number':'','tel':'','url':''}">
                    <input :type="label.type" :name="label.entityName" lay-verify="label.entityName" autocomplete="off" class="layui-input" :value="detail[label.entityName]">
                </div>-->
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

    var conf = {}
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
        data() {
            conf = confMap.getConfig(this.moduleConfig)
            console.log(this.moduleConfig)
            console.log(conf)
            return {
                _this: this,
                labels: {},
                detail: {},
                operator: [],
                fullscreenLoading: false,
            }
        },
        mounted() {
            this.initData()
        },
        created() {
        },
        methods: {
            initData: function () {
                this._this = this
                this.operator = conf.moduleConfig.operator
                this.conf = conf
                conf.getColumnData(this, function (data, obj) {
                    obj.labels = data.resultInfo.list
                    obj.getData()
                })
            },
            getData: function () {
                conf.getDetailData(this, function (data, obj) {
                    obj.detail = data.resultInfo
                })
            }
        }
    }
</script>

