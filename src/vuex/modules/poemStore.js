export default {
	namespaced: true,
	state: {
		path: 'poems',
		poems: [],
		poem: [],
		featured: []
	},
	mutations: {
		SET_POEMS(state, poems) {
			state.poems = poems;
		},
		SET_POEM(state, poem) {
			state.poem = poem;
		},
		SET_FEATURED(state, featured) {
			state.featured = featured;
		}
	},
	actions: {
		async fetchList({ commit, state, rootState }) {
			const listRef = rootState.data.child(state.path);
			const snap = await listRef.once('value');
			const items = snap.val().map((item, i) => {
				item._id = i;
				return item;
			});
			commit('SET_POEMS', items);
			const featured = items.filter(item => item.featured);
			commit('SET_FEATURED', featured);
		},
		async fetchDetail({ commit, state, rootState }) {
			const detailRef = rootState.data.child(state.path);
			const snap = await detailRef.once('value');
			const detail = snap.val();
			commit('SET_POEM', detail);
		}
	},
	getters: {
		poems: state => state.poems,
		poem: state => state.poem,
		featured: state => state.featured
	}
};
