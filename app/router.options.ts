import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  routes: _routes => [
    { name: 'home', path: '/', component: () => import('@/pages/home.vue') },
    { name: 'add', path: '/add', component: () => import('@/pages/edit.vue') },
    { name: 'edit', path: '/medicines/:id', component: () => import('@/pages/edit.vue') },
    { name: 'list', path: '/medicines', component: () => import('@/pages/medicine-list.vue') },
    { name: 'about', path: '/about', component: () => import('@/pages/about.vue') },
  ],
};
