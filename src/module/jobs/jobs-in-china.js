import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);



/* eslint-disable no-new */
new Vue({
  el:'#job',
  template:"<App/>",
  components:{ App }
});

/*const appRouter = new Vue({
 router: router,
 render: h=>h(App)
 }).$mount('#app');*/

/*router.push('/home');*/
