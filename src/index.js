import Vue from 'vue'
import App from '@/components/App.vue'
import router from './router'

Vue.config.productionTip = true
Vue.config.devtools = true

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})
