export let dataUrl = '/system/table/${tableId}/column'
export let detailUrl = this.dataUrl+'/${columnId}'
export let saveUrl = this.dataUrl
export let tableId = 'ecf4d0fb63ce11e880e70215d3c54da1'

export let tableOperator = [
    {'size': 'mini', 'type': '', 'action': 'detail', 'text': '查看'},
    {'size': 'mini', 'type': '', 'action': 'edit', 'text': '编辑'},
    {'size': 'mini', 'type': 'danger', 'action': 'delete', 'text': '删除'}]

export let operator = [
    {'size': 'medium', 'type': 'primary', 'action': 'submit', 'text': '提交'},
    {'size': 'medium', 'type': 'success', 'action': 'reset', 'text': '重置'}]

// 表格操作按钮对应的事件
export function handle(vue, action, index, row) {
    console.log(row)
    switch (action) {
        case 'detail':
            this.routerGoto(vue,'tableColumnDetail',{tableId: row.tableId,columnId: row.columnId});
            break;
        case 'edit':
            this.routerGoto(vue,'tableColumnEdit',{tableId: row.tableId,columnId: row.columnId});
            break;
        case 'delete':
            break;
    }
}
