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
		name: 'category.detail',
		path: '/category/:id',
		component: Detail
	}
];

export default routes;
