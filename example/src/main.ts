import Vue from 'vue';

// import validator from 'validator';

import { CreateElement, VNode } from 'vue/types';

import App from './App.vue';

import '@/plugins';

import store from './store';

import '@/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
	render: (h: CreateElement): VNode => h(App),
	store,
}).$mount('#app');
