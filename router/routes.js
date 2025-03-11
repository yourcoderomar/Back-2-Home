const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue') // Optional: Keep IndexPage.vue if needed
  },
  {
    path: '/OurPlans',
    component: () => import('pages/OurPlans.vue') 
  },
  {
    path: '/ReportMissing',
    component: () => import('pages/ReportMissing.vue') 
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes