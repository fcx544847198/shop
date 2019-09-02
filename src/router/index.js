import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')
const fenlei = () => import('../views/fenlei/fenlei')
const my = () => import('../views/my/my')
const shopcar = () => import('../views/shopcar/shopcar')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/fenlei',
    component:fenlei
  },
  {
    path:'/my',
    component:my
  },
  {
    path:'/shopcar',
    component:shopcar
  }
  ],
  mode:'history'
})
