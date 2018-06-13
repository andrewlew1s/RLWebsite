import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'Contact',
		path: '/contact',
		component: List,
		menu: true
	},
	{
		name: 'poem.detail',
		path: '/contact/:id',
		component: Detail
	}
];

export default routes;
