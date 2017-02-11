import Vue from 'vue';
import Router from 'vue-router';
import Simon from 'components/simon/simon';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'simon',
    component: Simon,
  }],
});
