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


const store = {
	state: {
		poems: [],
		poem: {}
	},
	mutations: {
		SET_POEMS(state, poems) {
			this.state.poems = poems;
		},
		SET_POEM(state, poem) {
			this.state.poem = poem;
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
		}
	},
	getters: {
		poems: state => state.poems,
		poem: state => state.poem
	}
};

export default store;
