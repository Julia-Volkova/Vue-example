import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history', // no hash tag in url
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) savedPosition;

    if (to.hash) {
      return {
        selector: to.hash,
      }
    }
    return {
      x: 0,
      y: 0,
    }
  }, // scroll to anchor
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});


