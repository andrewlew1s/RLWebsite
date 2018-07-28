export default {
	namespaced: true,
	state: {
		path: 'posts',
		posts: [],
		post: null
	},
	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts;
		},
		SET_POST(state, post) {
			state.post = post;
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
			commit('SET_POSTS', items);
		},
		async fetchDetail({ commit, state, rootState }) {
			const detailRef = rootState.data.child(state.path);
			const snap = await detailRef.once('value');
			const detail = snap.val();
			commit('SET_POST', detail);
			if (detail.poem) commit('SET_POEM', detail);
		}
	},
	getters: {
		posts: state => state.posts,
		post: state => state.post,
		featured: state => state.posts.filter(p => p.featured),
		poems: state => state.posts.filter(p => p.poem),
		performed: state => state.posts.filter(p => p.performed),
		published: state => state.posts.filter(p => p.published)
	}
};
