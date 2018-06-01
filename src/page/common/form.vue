<template>
    <el-form :model="detilForm">
        <div v-for="label in labels">
            <el-form-item :label="label.title" prop="age" v-if="label.type in {'text':'','password':'','color':'','date':'','datetime':'','datetime-local':'','month':'','week':'','time':'','email':'','hidden':'','number':'','tel':'','url':''}">
                <el-input :readonly="false" type="label.type" placeholder="请输入内容" v-model="data[label.entityName]"></el-input>
            </el-form-item>
        </div>
        <el-button v-if = "editable"  v-for="(ele, i) in operator" :key="i"
                   :size="ele.size"
                   :type="ele.type"
                   @click="detailHandle(_this,ele.action,data,)">{{ele.text}}</el-button>
    </el-form>
</template>


<script type="text/ecmascript-6">
    var conf = {}
    export default {
        props: {
            editable:{
                type: Boolean,
                default: false
            },
            detailHandle:{
                type: Object,
                default: function(obj,action,data){
                    console.error('detail operator ::: no function')
                    console.debug(obj)
                    console.debug(`action--->${action}:data--->`)
                    console.debug(data)
                }
            }
        },
        data(){
            return {
                _this: this,
                labels: {}, //表单属性名
                data: {}, //表单数据
                operator: [], //button组
            }
        },
        mounted() {
        },
        created(){
        },
        methods: {
            detailHandle: function (obj,action,data) {
            },
        }
    }
</script>
