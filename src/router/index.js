/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/

import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/layout' //布局页

Vue.use(Router)

// 通用页面
export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login'),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: '/',
    name: 'test',
    component: () => import('@/components/layout/layout.vue')
  },
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
  //     // {
  //     //   path: 'home',
  //     //   component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     //   name: 'home',
  //     //   meta: {
  //     //     title: '',//导航菜单标题
  //     //     icon: 'qq', // 导航菜单项图表
  //     //   }
  //     // },
  //
  //   ]
  // }
]

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: constRoutes
})
