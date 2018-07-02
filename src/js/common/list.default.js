
export let moduleConfig = {
    columnUrl : '/system/table/${tableId}/column',
    dataUrl : '',
    detailUrl : '',
    saveUrl : '',
    params : {},

    page : true,
    currentPage : 1,
    pageSize : 10,
    total : 0,
    layout : "total, prev, pager, next, jumper",
    tableOperator : [],
    pagination:{
        page : true,
        pageNum : 1,
        pageSize : 5,
        total : 0,
        layout : "total, prev, pager, next, jumper",
    }
}
