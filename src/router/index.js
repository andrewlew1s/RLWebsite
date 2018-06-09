import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Poems from '@/components/Poems';


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/poems',
			name: 'Poems',
			component: Poems
		}
		// #TODO: Add route for individual poem page
	]
});
