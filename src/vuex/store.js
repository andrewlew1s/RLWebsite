import poems from '../assets/poems';

const store = {
	state: {
		poems: {
			data: poems,
			loaded: (poems != null)
		}
	}
};

export default store;
