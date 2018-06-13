import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'Category',
		path: '/category',
		component: List,
		menu: true
	},
	{
		name: 'poem.detail',
		path: '/category/:id',
		component: Detail
	}
];

export default routes;
