import {routerGoto} from '../common/system.utils'
export let dataUrl = '/admin/menu'

export let filterUrl = '/system/table/${tableId}/column'
export let detailUrl = this.dataUrl+'/${menuId}'
export let saveUrl = this.dataUrl
export let tableId = '774478471704518656'

export let tableOperator = [
    {'size': 'mini', 'type': '', 'text': '查看',
        'click':function(vue, index, row){
            routerGoto(vue,'systemMenuDetail',{menuId: row.id})}
    },
    {'size': 'mini', 'type': '', 'text': '编辑',
        'click':function(vue, index, row){
            routerGoto(vue,'systemMenuEdit',{menuId: row.id})}},
    {'size': 'mini', 'type': 'danger', 'text': '删除',
        'click':function(vue, index, row){}}]


export let operator = [
    {'size': 'medium', 'type': 'primary', 'action': 'submit', 'text': '提交'},
    {'size': 'medium', 'type': 'success', 'action': 'reset', 'text': '重置'}]


export let filterOperator = [
    {'size': 'medium', 'type': 'primary', 'text': '提交',
        'click':function(vue, data, fun){
            fun()
    }},
    {'size': 'medium', 'type': 'success', 'text': '新增',
        'click':function(vue){
            routerGoto(vue,'systemMenuAdd',{})}}]
