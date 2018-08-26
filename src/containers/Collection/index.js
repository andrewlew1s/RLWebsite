import List from './List';
import Detail from './Detail';
import Published from './Published';
import Performed from './Performed';

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
	},
	{
		name: 'collection.published',
		path: '/published',
		component: Published
	},
	{
		name: 'collection.performed',
		path: '/performed',
		component: Performed
	}
];

export default routes;
