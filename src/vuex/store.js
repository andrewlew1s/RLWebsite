import firebase from 'firebase';
import postStore from './modules/postStore';
import pageStore from './modules/pageStore';


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
const dataRef = db.ref();

const store = {
	state: {
		data: dataRef
	},
	modules: {
		post: postStore,
		page: pageStore
	}
};

export default store;
