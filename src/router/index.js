import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/elementtest',
    name: 'elementtest',
    component: () => import('@/views/elementTest/elementTest.vue'),
  },
  {
    path: '/vue3test',
    name: 'vue3test',
    component: () => import('@/views/vue3Test/vue3Test.vue'),
  },
  {
    path: '/vue3test/thoroughComponent',
    name: 'thoroughComponent',
    component: () => import('@/views/vue3Test/thoroughComponent/thoroughComponent.vue'),
  },
  {
    path: '/vue3test/transitionsTest',
    name: 'transitionsTest',
    component: () => import('@/views/vue3Test/transitionsTest/transitionsTest.vue'),
  },
  {
    path: '/vue3test/transitionsListTest',
    name: 'transitionsListTest',
    component: () => import('@/views/vue3Test/transitionsListTest/transitionsListTest.vue'),
  },
  {
    path: '/vue3test/compositionApi',
    name: 'compositionApi',
    component: () => import('@/views/vue3Test/compositionApi/compositionApi.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
