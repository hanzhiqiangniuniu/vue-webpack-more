/**
 * Created by darren on 2017/5/4.
 */
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el:'#companies',
  template:"<App/>",
  components:{App}
});
