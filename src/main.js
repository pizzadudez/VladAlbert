import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import App from './App.vue';
import './styles/global.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
