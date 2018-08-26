import landingRoutes from '../containers/Landing';
import aboutRoutes from '../containers/About';
import collectionRoutes from '../containers/Collection';

const routes = [
	...landingRoutes,
	...aboutRoutes,
	...collectionRoutes,
	{
		path: '*',
		redirect: '/'
	}
];

export default routes;
