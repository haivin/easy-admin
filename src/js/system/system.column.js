import {routerGoto,} from '../common/system.utils'
export let dataUrl = '/system/table/${tableId}/column'
export let detailUrl = this.dataUrl+'/${columnId}'
export let saveUrl = this.dataUrl
export let tableId = '772307718662234112'

export let tableOperator = [
    {'size': 'mini', 'type': '', 'text': '查看',
        'click':function(vue, index, row){
            routerGoto(vue,'tableColumnDetail',{tableId: row.tableInfoId,columnId: row.id});}},
    {'size': 'mini', 'type': '', 'text': '编辑',
        'click':function(vue, index, row){
            routerGoto(vue,'tableColumnEdit',{tableId: row.tableInfoId,columnId: row.id});}},
    {'size': 'mini', 'type': 'danger', 'text': '删除',
        'click':function(vue, index, row){}}]

export let operator = [
    {'size': 'medium', 'type': 'primary', 'action': 'submit', 'text': '提交'},
    {'size': 'medium', 'type': 'success', 'action': 'reset', 'text': '重置'}]

// 表格操作按钮对应的事件
export function tableHandle(vue, action, index, row) {
    console.log(row)
    switch (action) {
        case 'detail':
            routerGoto(vue,'tableColumnDetail',{tableId: row.tableInfoId,columnId: row.id});
            break;
        case 'edit':
            routerGoto(vue,'tableColumnEdit',{tableId: row.tableInfoId,columnId: row.id});
            break;
        case 'delete':
            break;
    }
}
