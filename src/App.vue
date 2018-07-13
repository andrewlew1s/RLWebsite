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
	apiKey: 'AIzaSyCjOdEJb-yC05RldJ_orSg8URsW42jWaA8',
	authDomain: 'demoworld-c9c3a.firebaseapp.com',
	databaseURL: 'https://demoworld-c9c3a.firebaseio.com',
	projectId: 'demoworld-c9c3a',
	storageBucket: 'demoworld-c9c3a.appspot.com',
	messagingSenderId: '994402680084'
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

<style lang="scss">
@import './settings';

#app {
    .wrapper{
		padding-top: $Header_Height;
		background: $Background;
    }
    > * {
        float: left;
    }

}

.App {

	&__inner {
		width: 1140px;
		margin: auto;
		position: relative;
	}
}

</style>
