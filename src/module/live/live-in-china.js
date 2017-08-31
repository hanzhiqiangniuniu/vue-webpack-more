/**
 * Created by darren on 2017/5/5.
 */
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el:'#live',
  template:"<App/>",
  components:{App}
});
