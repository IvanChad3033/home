import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('@/views/transactions_page')
  },
  {
    path: '/buyer_names',
    name: 'Buyer_names',
    component: () => import('@/views/buyer_names_page'),
  },
  {
    path: '/transactions-edit/:id?',
    name: 'Transactions_Edit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/transactions_Edit'),
  },
  {
    path: '/buyer_names-edit/:id_buyer?',
    name: 'Buyer_names_Edit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/buyer_names_Edit'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/transactions_page'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
