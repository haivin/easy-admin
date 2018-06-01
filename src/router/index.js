import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const table = r => require.ensure([], () => r(require('@/page/sys/table')), 'table');
const detail = r => require.ensure([], () => r(require('@/page/sys/detail')), 'detail');
const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/home',
        component: home,
        name: 'home',
        children: [{
            path: '',
            component: table,
            name: '',
            props: {moduleConfig: 'systemTable'}
        },{
            path: 'table',
            component: table,
            name: 'table',
            props: {moduleConfig: 'systemTable'}
        },{
            path: 'table/:tableId',
            component: detail,
            name: 'tableDetail',
            meta: ['表详情'],
            props: {moduleConfig: 'systemTable'}
        },{
            path: 'table/:tableId/edit',
            component: detail,
            name: 'tableEdit',
            meta: ['编辑表'],
            props: {moduleConfig: 'systemTable',editable: true}
        },{
            path: 'table/:tableId/column',
            component: table,
            name: 'tableColumn',
            meta: ['表的列'],
            props: {moduleConfig: 'systemTableColumn'}
        },{
            path: 'table/:tableId/column/:columnId',
            component: detail,
            name: 'tableColumnDetail',
            meta: ['列详情'],
            props: {moduleConfig: 'systemTableColumn'}
        },{
            path: 'table/:tableId/column/:columnId/edit',
            component: detail,
            name: 'tableColumnEdit',
            meta: ['列详情编辑'],
            props: {moduleConfig: 'systemTableColumn',editable: true}
        }]
    }
]

export default new Router({
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
