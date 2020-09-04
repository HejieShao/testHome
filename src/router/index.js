Vue.use(VueRouter)

const pcHome = () => import("@/views/pc/home/home")

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: '/',
    name: 'Home',
    component: pcHome,
    meta: {
      title: '哈匹'
    }
  },
  {
    path: '/ha',
    name: 'Home',
    component: pcHome,
    meta: {
      title: '哈匹-hahaha'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.matched[0].meta.title)
    document.title = to.meta.title
  next()
})

export default router
