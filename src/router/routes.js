import landingRoutes from '../containers/Landing';
import aboutRoutes from '../containers/About';
import poemRoutes from '../containers/Poem';

const routes = [
	...landingRoutes,
	...aboutRoutes,
	...poemRoutes
];

export default routes;
