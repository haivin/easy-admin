import {routerGoto} from '../common/system.utils'
export let dataUrl = '/system/table'

export let detailUrl = this.dataUrl+'/${tableId}'
export let saveUrl = this.dataUrl
export let tableId = '772307719036981248'

export let tableOperator = [
    {'size': 'mini', 'type': '', 'text': '查看',
        'click':function(vue, index, row){
        routerGoto(vue,'tableDetail',{tableId: row.id})}},
    {'size': 'mini', 'type': '', 'text': '编辑',
        'click':function(vue, index, row){
        routerGoto(vue,'tableEdit',{tableId: row.id})}},
    {'size': 'mini', 'type': 'danger', 'text': '删除'},
    {'size': 'mini', 'type': '', 'text': '列信息',
        'click':function(vue, index, row){
        routerGoto(vue,'tableColumn',{tableId: row.id})}}]


export let operator = [
    {'size': 'medium', 'type': 'primary', 'action': 'submit', 'text': '提交'},
    {'size': 'medium', 'type': 'success', 'action': 'reset', 'text': '重置'}]
