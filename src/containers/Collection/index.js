import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'collection.list',
		path: '/collection',
		component: List,
		menu: true,
		menuName: 'Collection'
	},
	{
		name: 'collection.detail',
		path: '/collection/:id',
		component: Detail
	}
];

export default routes;
