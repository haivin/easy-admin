import * as http from '../http'
import { MessageBox } from 'element-ui';


/*export function buildColumnUrl(url, params = {'tableId': ''}) {

    var regex = /\$\{(\w+)\}/g
    var urlParams = [];
    var match;
    while (match = regex.exec(url)) {
        urlParams.push(match[1]);
    }

    for (var key of urlParams.values()) {
        let value = params[key]
        url = url.replace('${' + key + '}', value)
    }
    return url
}*/

export function buildUrl(url, params = {'tableId': ''},router={}) {
    let routerParams = router.params || {}
    let routerQuery = router.query || {}
    var regex = /\$\{(\w+)\}/g
    var urlParams = [];
    var match;
    while (match = regex.exec(url)) {
        urlParams.push(match[1]);
    }

    for (var key of urlParams.values()) {
        let value = params[key] || routerParams[key] || routerQuery[key]
        url = url.replace('${' + key + '}', value)
    }
    return url
    // let params = router.params || {}
    // let query = router.query || {}
    //
    // var regex = /\$\{(\w+)\}/g
    // var urlParams = [];
    // var match;
    // while (match = regex.exec(url)) {
    //     urlParams.push(match[1]);
    // }
    //
    // for (var key of urlParams.values()) {
    //     let value = params[key] || query[key]
    //     url = url.replace('${' + key + '}', value)
    // }
    // return url
}


/*export function getColumnData(url, tableId, callback = function () {
}) {
    let params = {'tableId': tableId}
    url = buildUrl(url, params);
    console.log('getColumnData url--->' + url)
    console.log(url)
    http.fetch(url, null)
        .then(function (json) {
                callback(json)
            }
        ).catch(function (response) {
            console.error(response)
        }
    )
}*/


export function getColumnData(url, callback = function () {
}) {
    console.log('getColumnData url--->' + url)
    http.fetch(url, null)
        .then(function (json) {
                callback(json)
            }
        ).catch(function (response) {
            console.error(response)
        }
    )
}


export function getData(url, params, callback = function () {
}) {
    // url = buildUrl(url, params);
    console.log('getData url--->' + url)
    console.log(url)
    console.log('params--->')
    console.log(params)

    http.fetch(url, params)
        .then(function (json) {
            callback(json)
        }).catch(function (response) {
        console.error(response)
    })
}

export function getDetailData(url, params, callback = function () {
}) {
    console.log('getDetailData url--->' + url)
    http.fetch(url, params)
        .then(function (json) {
            callback(json)
        }).catch(function (response) {
        console.error(response)
    })
}

export function saveData(url, params,  successCallback = function () {
},finallyCallback = function () {}) {
    // url = buildUrl(url, params);
    // let url = replaceParams(this.saveUrl,ids)
    console.log('saveData url--->' + url)
    console.log('params--->')
    console.log(params)
    http.post(url, params)
        .then(function (json) {
            if (json.resultCode == 200) {
                // MessageBox.message({type: 'success', message: '操作成功!'});
            }
            successCallback(json);
        })
        .catch(function (response) {
            console.error(response)
        })
        .finally(function(){
            finallyCallback()
        })

    /*obj.$ajax({
        method: 'POST',
        url: url,
        params: params
    }).then(function (response) {
        console.log(response)
        if (response.data.resultCode == 200) {
            obj.$message({type: 'success', message: '操作成功!'});
        }
        callback(response.data, obj, params)
        obj.fullscreenLoading = false
    }).catch(function (response) {
        console.error(response)
        obj.fullscreenLoading = false
    })*/
}

export function confirmWrapper(callback,...args){
    MessageBox.confirm('确定进行此操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        console.log(this)
        callback(args)
    }).catch(() => {
        MessageBox.message({
            type: 'info',
            message: '动作已取消'
        });
    });
}


export class Handler{
    detailHandler(){

    }
}



// 详情操作按钮对应的事件
export function formHandle(obj, action, detail) {
    switch (action) {
        case 'submit':
            MessageBox.confirm('确定添加/更新此数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                obj.fullscreenLoading = true
                saveData(obj.saveUrl, detail,function(){},function(){
                    obj.fullscreenLoading = false
                })
            }).catch(() => {
                MessageBox.message({
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

export function routerGoto(vue, name, params, query) {
    vue.$router.push({name: name, params: params, query: query})
}
