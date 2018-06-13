import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'About Me',
		path: '/about',
		component: List,
		menu: true
	},
	{
		name: 'poem.detail',
		path: '/about/:id',
		component: Detail
	}
];

export default routes;
