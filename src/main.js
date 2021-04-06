import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex/index'

//styles...............
import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Bootstrap)

import "@/assets/sass/main.sass";

//styles...............

Vue.prototype.$NAME = () => {return '12321321'};
Vue.prototype.$blogName = 'LogRocket'

// fetch.prototype.realSend = ()=>{
//   return console.log("fetch return realSend ")
// }
// var formData = new FormData();
// formData.append('key1', 'value1');
// console.log('instanceof formData ', formdata instanceof formData)
// Vue.use(appName);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
