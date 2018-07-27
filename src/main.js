// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import storeConfig from './vuex/store';
import App from './App';
import router from './router';
import AppLoader from './components/AppLoader';

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.component('app-loader', AppLoader);

const store = new Vuex.Store(storeConfig);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	store
});
