import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import Index from '../views/Index'
import BookUpdate from '../views/BookUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Book Manage",
    component:Index,
    show:true,
    redirect:"/BookManage",
    children:[
      {
        path:"/BookManage",
        name:"Search Book",
        component:BookManage,
        show:true,
      },
      {
        path:"/AddBook",
        name:"Add Book",
        component:AddBook,
        show:true,
      }
    ]
  },
  {
    path:'/update',
    component:BookUpdate,
    show:false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
