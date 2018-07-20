import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})

// new Vue({
//   el: '#header-nav',
//   data: {
//     items: [
//       { name: 'About' },
//       { name: 'Projects' },
//       { name: 'Contacts' },
//     ]
//   }
// })
