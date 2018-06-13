<template>
  <div id="app">
    <Header></Header>
	<!-- Passing properties in this way makes them available at all routes -->
    <router-view class="wrapper"
		:posts="posts"/>
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
const postsRef = db.ref('posts');

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			loadingposts: false,
			posts: []
		};
	},
	methods: {
		async loadposts() {
			this.loadingposts = true;
			const snap = await postsRef.once('value');
			this.posts = this.postIdFactory(snap.val());
			this.loadingposts = false;
		},
		// When given an array of posts, simply returns the same array but with the
		// property 'id' added to each post and the value of its position in the array
		postIdFactory(posts) {
			return posts.map((post, i) => {
				post.id = i;
				return post;
			});
		}
	},
	mounted() {
		this.loadposts();
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
