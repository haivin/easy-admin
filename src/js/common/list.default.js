
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
        handleSizeChange: function (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange: function (val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val
        },
    }
}
