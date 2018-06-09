import List from './List';
import Detail from './Detail';

const routes = [
	{
		name: 'Collection',
		path: '/poems',
		component: List,
		menu: true
	},
	{
		name: 'poem.detail',
		path: '/poems/:id',
		component: Detail
	}
];

export default routes;
