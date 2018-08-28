export default {
	namespaced: true,
	state: {
		path: 'page-data',
		posts: [],
		post: null
	},
	mutations: {
		SET_PAGE_DATA(state, pageData) {
			state.pageData = pageData;
		}
	},
	actions: {
		async fetchPageData({ commit, state, rootState }, pageName) {
			const path = `${state.path}/${pageName}`;
			const listRef = rootState.data.child(path);
			const snap = await listRef.once('value');
			const pageData = snap.val();
			commit('SET_PAGE_DATA', pageData);
			return pageData;
		}
	},
	getters: {
		pageData: state => state.pageData
	}
};
