import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCjOdEJb-yC05RldJ_orSg8URsW42jWaA8',
	authDomain: 'demoworld-c9c3a.firebaseapp.com',
	databaseURL: 'https://demoworld-c9c3a.firebaseio.com',
	projectId: 'demoworld-c9c3a',
	storageBucket: 'demoworld-c9c3a.appspot.com',
	messagingSenderId: '994402680084'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

const poemsRef = db.ref('poems');
const slideRef = db.ref('slides');


const store = {
	state: {
		poems: [],
		poem: {},
		homeSlides: []
	},
	mutations: {
		SET_POEMS(state, poems) {
			this.state.poems = poems;
		},
		SET_POEM(state, poem) {
			this.state.poem = poem;
		},
		SET_SLIDES(state, slides) {
			this.state.homeSlides = slides;
		}
	},
	actions: {
		async loadPoems({ commit }) {
			const snap = await poemsRef.once('value');
			const poems = snap.val().map((poem, i) => {
				poem._id = i;
				return poem;
			});
			commit('SET_POEMS', poems);
		},
		async loadPoem({ commit }, id) {
			const snap = await poemsRef.child(id).once('value');
			const poem = snap.val();
			commit('SET_POEM', poem);
			return snap;
		},
		async loadSlides({ commit, dispatch, state }) {
			// This function is dependent on state.poems being loaded
			// so triggers a call to that action before anything else
			await dispatch('loadPoems');
			const snap = await slideRef.once('value');
			const slides = snap.val().map(poemId => state.poems[poemId]);
			commit('SET_SLIDES', slides);
		}
	},
	getters: {
		poems: state => state.poems,
		poem: state => state.poem,
		homeSlides: state => state.homeSlides
	}
};

export default store;
