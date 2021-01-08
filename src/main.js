import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import Vuex from 'vuex';


import {
  Button,
  Layout,
  Menu,
  Radio,
  Space,
  Icon,
  Breadcrumb,
  LocaleProvider,
  Calendar,
  Input,
  Tooltip,
  Form,
  Checkbox
} from 'ant-design-vue'
import vueConfig from './vue.config'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Radio)
Vue.use(Space)
Vue.use(Icon)
Vue.use(Breadcrumb)
Vue.use(LocaleProvider)
Vue.use(Calendar)
Vue.use(Input)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(Checkbox)


//vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
