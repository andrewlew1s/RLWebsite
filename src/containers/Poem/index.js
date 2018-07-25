import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'poem.list',
		path: '/poems',
		component: List,
		menu: true,
		menuName: 'Collection'
	},
	{
		name: 'poem.detail',
		path: '/poems/:id',
		component: Detail
	}
];

export default routes;
