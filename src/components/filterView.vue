<template>
    <el-form :inline="true" label-position="right" label-width="70px" :model="params">
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
                           @click="ele.click(_this)">
                    {{ele.text}}
                </el-button>
            </el-row>
    </el-form>
</template>

<script type="text/ecmascript-6">
    import {getColumnData,getData} from '../js/common/system.utils'
    var _this ;
    export default {
        props: [
            'params',
            'filterUrl',
            'filterOperator'
        ],
        data(){
            return{
                _this: this,
                labels: [],
            }
        },
        mounted() {
            this._this = this
            _this = this
            this.initData()
        },
        created(){
        },
        methods: {
            initData: function () {
                getColumnData(_this.filterUrl , function (data) {
                    _this.labels = data.resultInfo.list
                })
            },
        },
        components: {
        }
    }
</script>
