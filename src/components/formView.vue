<template>
    <el-form  v-loading.fullscreen.lock="fullscreenLoading">
        <div v-for="label in labels">
            <el-form-item :label="label.title" :prop="label.propertyName"
                          v-if="label.type in {'text':'','password':'','color':'','date':'',
                          'datetime':'','datetime-local':'','month':'','week':'','time':'',
                          'email':'','hidden':'','number':'','tel':'','url':''}">
                <el-input :readonly="false" type="label.type" placeholder="请输入内容" v-model="data[label.propertyName]"></el-input>
            </el-form-item>
            <el-form-item :label="label.title" :prop="label.propertyName"
                          v-if="label.type == 'radio'">
                <el-radio-group v-model="data[label.propertyName]">
                    <el-radio :label="'3'">备选项</el-radio>
                    <el-radio :label="'6'">备选项</el-radio>
                    <el-radio :label="'9'">备选项</el-radio>
                </el-radio-group>
            </el-form-item>

        </div>
        <el-button v-if = "editable"  v-for="(ele, i) in operator" :key="i"
                   :size="ele.size"
                   :type="ele.type"
                   @click="formHandle(ele.action,data)">
            {{ele.text}}
        </el-button>
    </el-form>
</template>


<script type="text/ecmascript-6">
    import {getColumnData2,getDetailData,formHandle,saveData} from '../js/common/system.utils'
    var _this = null
    export default {
        props: ['editable',
            'operator', //button组
            'columnUrl',
            'detailUrl',
            'saveUrl',
            'params',
            ],
        data(){
            return {
                _this: this,
                labels: [],
                data: [],
                fullscreenLoading: false,
            }
        },
        mounted() {
            this._this = this
            _this = this
            this.initData();
        },
        created(){
        },
        methods: {
            initData: function(){
                getColumnData2(this.columnUrl, function (data) {
                    _this.labels = data.resultInfo.list
                    getDetailData(_this.detailUrl, _this.params, function (data) {
                        _this.data = data.resultInfo
                    });
                })
            },
            formHandle: function(action, detail){
                console.log(action)
                switch (action) {
                    case 'submit':
                        _this.$confirm('确定添加/更新此数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            _this.fullscreenLoading = true
                            saveData(_this.saveUrl, detail,function(){

                            },function(){
                                _this.fullscreenLoading = false
                            })
                        }).catch(() => {
                            _this.$message({
                                type: 'info',
                                message: '已取消此操作'
                            });
                        });
                        break;
                    case 'reset':
                        _this.initData()
                        break;
                }
            }
        }
    }
</script>
