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
		name: 'contact.detail',
		path: '/contact/:id',
		component: Detail
	}
];

export default routes;
