import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios'
import {post,fetch,patch,put} from './js/http'

Vue.config.productionTip = false;

Vue.use(ElementUI);
//定义全局变量
axios.defaults.baseURL = '/api';
Vue.prototype.$ajax=axios;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
