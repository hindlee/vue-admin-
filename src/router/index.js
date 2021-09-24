import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

import privateInformation from '@/views/privateInformation/index'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
  */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
]
export const asyncRoutes = [
    {
        path: '/test',
        component: Layout,
        children:[{
            path: '/test',
            name: 'Test',
            component: () => import('@/views/test/index'),
            meta: { title: 'Test', icon: 'tree', role: ['editor']}
        }]  
    },
    {
        path: '/private',
        meta: { title: '个人中心', icon: 'el-icon-user', role: ['admin'] },    
        component: Layout,
        redirect: '/privateInformation',
        children:[
            {
                path: 'privateInformation',
                component: () => import('@/views/privateInformation/baseInformation'),
                meta: { title: '个人信息', icon: 'el-icon-user', role: ['admin'] },
            },
            {
                path:'change',
                component: () => import('@/views/privateInformation/changeInformation'),
                meta: { title: '修改信息', icon: 'el-icon-user', role: ['admin'] }
            }
        ]  
    },
    {
        path: '/test1',
        component: Layout,
        children:[{
            path: '/test1',
            name: 'Test1',
            component: () => import('@/views/test1/index'),
            meta: { title: 'Test', icon: 'tree', role: ['editor']}
        }]  
    },
    {
        path: '/manage',
        meta: { title: '园区管理', icon: 'el-icon-user', role: ['admin'] },    
        component: Layout,
        children:[{
            path: 'manage',
            name: 'Manege',
            component: () => import('@/views/manager/index'),
            meta: { title: '工位管理', icon: 'tree', role: ['admin']}
        },{
            path: 'manage1',
            name: 'Manege1',
            component: () => import('@/views/manager/company'),
            meta: { title: '公司管理', icon: 'tree', role: ['admin']}
        }]  
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
                                      // mode: 'history', // require service support
                                      scrollBehavior: () => ({ y: 0 }),
                                      routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
