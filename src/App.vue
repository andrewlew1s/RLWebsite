<template>
  <div id="app">
    <Header></Header>
	<!-- Passing properties in this way makes them available at all routes -->
    <router-view class="wrapper"
		:poems="poems"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Firebase from 'firebase';
import Header from './components/Header';
import Footer from './components/Footer';

const firebaseConfig = {
	apiKey: 'AIzaSyCBSeq7wRNRQQYZnxZGYt35P-6-yHvwXIg',
	authDomain: 'asdsa-48c2f.firebaseapp.com',
	databaseURL: 'https://asdsa-48c2f.firebaseio.com',
	projectId: 'asdsa-48c2f',
	storageBucket: 'asdsa-48c2f.appspot.com',
	messagingSenderId: '92593551317'
};

const app = Firebase.initializeApp(firebaseConfig);
const db = app.database();
const poemsRef = db.ref('poems');

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			loadingPoems: false,
			poems: []
		};
	},
	methods: {
		async loadPoems() {
			this.loadingPoems = true;
			const snap = await poemsRef.once('value');
			this.poems = snap.val();
			this.loadingPoems = false;
		}
	},
	mounted() {
		this.loadPoems();
	}
};
</script>

<style lang="scss" scoped>
@import './styles/reset';
@import './Style';

#app {
    .wrapper{
        padding-top: 200px;
    }
    > * {
        float: left;
    }

}

</style>
