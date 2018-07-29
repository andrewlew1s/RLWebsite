import List from './List';
import Detail from './Detail';
import Published from './Published';
import Performed from './Performed';

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
	},
	{
		name: 'collection.published',
		path: '/collection/published',
		component: Published
	},
	{
		name: 'collection.performed',
		path: '/collection/performed',
		component: Performed
	}
];

export default routes;
