
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
    tableOperator : []
}

export function replaceParams(url, ...ids) {
    var reg = /\$\{(\d+)\}/
    for (var k in ids) {
        url = url.replace(reg, ids[k])
    }
    return url
}

export function buildColumnUrl(url,  router) {
    let params = router.params || {}
    let query = router.query || {}

    var regex = /\$\{(\w+)\}/g
    var urlParams = [];
    var match;
    while (match = regex.exec(url)) {
        urlParams.push(match[1]);
    }

    for (var key of urlParams.values()) {
        let value = this.moduleConfig[key] || params[key] || query[key]
        url = url.replace('${'+key+'}', value)
    }
    return url
}

export function buildUrl(url, router) {
    let params = router.params || {}
    let query = router.query || {}

    var regex = /\$\{(\w+)\}/g
    var urlParams = [];
    var match;
    while (match = regex.exec(url)) {
        urlParams.push(match[1]);
    }

    for (var key of urlParams.values()) {
        let value = params[key] || query[key]
        url = url.replace('${'+key+'}', value)
    }
    return url
}


export function getColumnData(obj, callback = function () {
}) {
    let url = this.buildColumnUrl(this.moduleConfig.columnUrl,obj.$route);
    // let url = replaceParams(this.columnUrl,ids)
    console.log('getColumnData url--->'+url)
    // console.log('params--->')
    // console.log(this.moduleConfig.params)
    obj.$ajax({
        method: 'GET',
        url: url,
        // params: this.moduleConfig.params
    }).then(function (response) {
        console.log(response)
        callback(response.data, obj)
    }).catch(function (response) {
        console.error(response)
    })
}

export function getData(obj, callback = function () {
}) {
    let url = this.buildUrl(this.moduleConfig.dataUrl,obj.$route);
    // let url = replaceParams(this.dataUrl,ids)
    this.moduleConfig.params['pageNum'] = this.moduleConfig.currentPage
    this.moduleConfig.params['pageSize'] = this.moduleConfig.pageSize
    console.log('getData url--->'+url)
    console.log('params--->')
    console.log(this.moduleConfig.params)
    obj.$ajax({
        method: 'GET',
        url: url,
        params: this.moduleConfig.params
    }).then(function (response) {
        console.log(response)
        callback(response.data, obj)
    }).catch(function (response) {
        console.error(response)
    })
}

export function getDetailData(obj, callback = function () {
}) {
    let url = this.buildUrl(this.moduleConfig.detailUrl,obj.$route);
    // let url = replaceParams(this.dataUrl,ids)
    this.moduleConfig.params['pageNum'] = this.moduleConfig.currentPage
    this.moduleConfig.params['pageSize'] = this.moduleConfig.pageSize
    console.log('getDetailData url--->'+url)
    console.log('params--->')
    console.log(this.moduleConfig.params)
    obj.$ajax({
        method: 'GET',
        url: url,
        params: this.moduleConfig.params
    }).then(function (response) {
        console.log(response)
        callback(response.data, obj)
    }).catch(function (response) {
        console.error(response)
    })
}

export function saveData(obj, params, callback = function () {
}) {
    let url = this.buildUrl(this.moduleConfig.saveUrl,obj.$route);
    // let url = replaceParams(this.saveUrl,ids)
    console.log('saveData url--->'+url)
    console.log('params--->')
    console.log(params)
    obj.$ajax({
        method: 'POST',
        url: url,
        params: params
    }).then(function (response) {
        console.log(response)
        if(response.data.resultCode == 200){
            obj.$message({type: 'success',message: '操作成功!'});
        }
        callback(response.data, obj, params)
        obj.fullscreenLoading = false
    }).catch(function (response) {
        console.error(response)
        obj.fullscreenLoading = false
    })
}


// 表格操作按钮对应的事件
export function handle(action, index, row) {
    switch (action) {
        case 'edit':
            break;
    }
}


// 详情操作按钮对应的事件
export function detailHandle(vue, action, detail) {
    switch (action) {
        case 'submit':
            vue.$confirm('确定添加/更新此数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vue.fullscreenLoading = true
                this.saveData(vue, detail)
            }).catch(() => {
                vue.$message({
                    type: 'info',
                    message: '已取消此操作'
                });
            });
            break;
        case 'reset':
            vue.initData()
            break;
    }
}

export function routerGoto(vue,name,params,query){
    vue.$router.push({name: name, params: params,query: query})
}
