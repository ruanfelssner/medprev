import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Editar from '../views/Editar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: Editar,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cadastro" */ '../views/Cadastro.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
