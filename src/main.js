// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import store from './store.js'
import App from './App.vue'
import Login from './components/Login.vue'
import SellerIndicators from './components/SellerIndicators.vue'
import Prospect from './components/Prospect.vue'
import AddProspect from './components/AddAsProspect.vue'
import ProspectsContacted from './components/ProspectsContacted.vue'
import CotizationsSells from './components/CotizationsSells.vue'
import Cuotas from './components/Cuotas.vue'
import AsignGoals from './components/AsignGoals.vue'


window.axios = require('axios')
window.is = require('is-js')

let prodApi = 'https://ghjffh.local/api/'
let devApi = 'http://orkestra.sytes.net/api/v1'

window.apiUrl =  devApi

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.token;
// axios.defaults.timeout                         = 8000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


import VueRouter from 'vue-router'
Vue.use(VueRouter)

function scrollTop (to,from,next){
  let body = document.querySelector('body')
  let html = document.querySelector('html')
  body.scrollTop = 0
  html.scrollTop = 0
  next()
}


let routes = [
	{path: '/login', component: Login, beforeEnter:scrollTop},
  {path: '/indicadores-vendedor', component: SellerIndicators, beforeEnter:scrollTop},
  {path: '/prospectar', component: Prospect, beforeEnter:scrollTop},
  {path: '/agregar-prospecto', component: AddProspect, beforeEnter:scrollTop},
  {path: '/prospectos-contactados', component: ProspectsContacted, beforeEnter:scrollTop},
  {path: '/cotizaciones-ventas', component: CotizationsSells, beforeEnter:scrollTop},
  {path: '/cuotas', component: Cuotas, beforeEnter:scrollTop},
  {path: '/asignar-metas', component: AsignGoals, beforeEnter:scrollTop},


]

let router = new VueRouter({
	routes,
	// mode: 'history',
	// history: true
})

let VueApp = new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  created(){
    
  }
})
