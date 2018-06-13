import homeRoutes from '../containers/Home';
import aboutRoutes from '../containers/About';
import categoryRoutes from '../containers/Category';
import contactRoutes from '../containers/Contact';

const routes = [
	...homeRoutes,
	...aboutRoutes,
	...categoryRoutes,
	...contactRoutes
];

export default routes;
