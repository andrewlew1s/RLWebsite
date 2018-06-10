import homeRoutes from '../containers/Home';
import aboutRoutes from '../containers/About';
import poemRoutes from '../containers/Poem';

const routes = [
	...homeRoutes,
	...aboutRoutes,
	...poemRoutes
];

export default routes;
