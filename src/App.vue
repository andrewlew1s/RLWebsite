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
	apiKey: 'AIzaSyBQGtbFb4l6t7DmpYrXKJxgYNIAM7wpYhE',
	authDomain: 'wander-with-maya-406da.firebaseapp.com',
	databaseURL: 'https://wander-with-maya-406da.firebaseio.com',
	projectId: 'wander-with-maya-406da',
	storageBucket: 'wander-with-maya-406da.appspot.com',
	messagingSenderId: '545679964819'
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
			this.poems = this.poemIdFactory(snap.val());
			this.loadingPoems = false;
		},
		// When given an array of poems, simply returns the same array but with the
		// property 'id' added to each poem and the value of its position in the array
		poemIdFactory(poems) {
			return poems.map((poem, i) => {
				poem.id = i;
				return poem;
			});
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
        padding-top: $Header_Height;
    }
    > * {
        float: left;
    }

}

</style>
