// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import { VueRouter } from 'vue-router/types/router';

//element-ui  ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

// const Foo = {'template': '<div>Foo</div>'}
// const Bar = {'template': '<div>Bar</div>'}
// const routes = [{path: '/foo',component: Foo},{path: '/bar', component: Bar}];
// const router = new VueRouter({
//   routes
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
