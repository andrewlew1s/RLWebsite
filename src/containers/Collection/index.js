import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'collection.list',
		path: '/published-&-performed',
		component: List,
		menu: true,
		menuName: 'Published & Performed'
	},
	{
		name: 'collection.detail',
		path: '/collection/:id',
		component: Detail
	}
];

export default routes;
