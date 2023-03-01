import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  routes: _routes => [
    { name: 'Home', path: '/', component: () => import('~/pages/home.vue') },
    { name: 'Add', path: '/add', component: () => import('~/pages/edit.vue') },
    { name: 'Edit', path: '/medicines/:id', component: () => import('~/pages/edit.vue') },
    { name: 'List', path: '/medicines', component: () => import('~/pages/medicine-list.vue') },
    { name: 'About', path: '/about', component: () => import('~/pages/about.vue') },
  ],
};
