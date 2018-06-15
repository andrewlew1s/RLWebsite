import homeRoutes from '../containers/Home';
import aboutRoutes from '../containers/About';
import poemRoutes from '../containers/Poem';
import leagueRoutes from '../containers/League_of_legends';

const routes = [
	...homeRoutes,
	...aboutRoutes,
	...poemRoutes,
	...leagueRoutes
];

export default routes;
