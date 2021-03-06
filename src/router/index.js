import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const table = r => require.ensure([], () => r(require('@/page/sys/table')), 'table');
const detail = r => require.ensure([], () => r(require('@/page/sys/detail')), 'detail');
const dynamic = r => require.ensure([], () => r(require('@/page/dynamic')), 'dynamic');
const routes = [
    {
        path: '/test',
        component: dynamic
    },
    {
        path: '/',
        component: login
    },
    {
        path: '/home',
        component: home,
        name: 'home',
    },
    {
        path: '/system',
        component: home,
        name: 'system',
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
        },{
            path: 'menu',
            component: table,
            name: 'systemMenu',
            props: {moduleConfig: 'systemMenu',hasFilter: true}
        },{
            path: 'menu/detail',
            component: detail,
            name: 'systemMenuDetail',
            props: {moduleConfig: 'systemMenu'}
        },{
            path: 'menu/edit',
            component: detail,
            name: 'systemMenuEdit',
            props: {moduleConfig: 'systemMenu',editable: true}
        },{
            path: 'menu/add',
            component: detail,
            name: 'systemMenuAdd',
            props: {moduleConfig: 'systemMenu',editable: true, toObtainData: false}
        },]
    }
]

export default new Router({
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
