export let dataUrl = '/system/table'

export let detailUrl = this.dataUrl+'/${tableId}'
export let saveUrl = this.dataUrl
export let tableId = 'ecf517fe63ce11e880e70215d3c54da1'

export let tableOperator = [{'size': 'mini', 'type': '', 'action': 'detail', 'text': '查看'},
    {'size': 'mini', 'type': '', 'action': 'edit', 'text': '编辑'},
    {'size': 'mini', 'type': 'danger', 'action': 'delete', 'text': '删除'},
    {'size': 'mini', 'type': '', 'action': 'column', 'text': '列信息'}]


export let operator = [
    {'size': 'medium', 'type': 'primary', 'action': 'submit', 'text': '提交'},
    {'size': 'medium', 'type': 'success', 'action': 'reset', 'text': '重置'}]

// 表格操作按钮对应的事件
export function handle(vue, action, index, row) {
    console.log(row)
    switch (action) {
        case 'detail':
            this.routerGoto(vue,'tableDetail',{tableId: row.tableId});
            break;
        case 'edit':
            this.routerGoto(vue,'tableEdit',{tableId: row.tableId});
            break;
        case 'delete':
            break;
        case 'column':
            this.routerGoto(vue,'tableColumn',{tableId: row.tableId});
            break;
    }
}
