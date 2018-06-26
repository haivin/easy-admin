import * as tools from './tools'
import * as config from './list.default'
import * as systemTable from '../system/system.table'
import * as systemTableColumn from '../system/system.column'
import * as systemMenu from '../system/system.menu'

export function getConfig(param) {
    let moduleConfig = {}
    switch (param){
        case 'systemTable':
            moduleConfig = systemTable
            break;
        case 'systemTableColumn':
            moduleConfig = systemTableColumn
            break;
        case 'systemMenu':
            moduleConfig = systemMenu
            break;
    }
    var configCopy = tools.deepCopy(config)
    for(var key in moduleConfig){
        if(typeof moduleConfig[key] == 'function'){
            configCopy[key] = moduleConfig[key]
        }else{
            configCopy['moduleConfig'][key] = moduleConfig[key]
        }
    }
    return configCopy
}

