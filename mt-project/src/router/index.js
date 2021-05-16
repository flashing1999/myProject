import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/Default.vue'
import blankPage from '@/layout/Blank.vue'
import Home from '@/pages/index.vue'
import ChangeCity from '@/pages/ChangeCity.vue'
import goodsList from '@/pages/goodsList.vue'
import productDeatil from '@/pages/productDeatil.vue'
import login from '@/pages/login.vue'
import register from '@/pages/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/index',
      component: defaultPage,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Home
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: 'productDeatil/:index',
          name: 'productDeatil',
          component: productDeatil
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
