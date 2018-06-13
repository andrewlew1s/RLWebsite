<template>
	<div class="post-detail">
		<div class="inner">

			<div v-bind:key="post.title" class="mb-3">
				<h2>{{post.title}}</h2>
				<div v-if="post.text" v-html="post.text"></div>
				<p v-if="post.image">
					<img thumbnail :src="post.image"/>
				</p>
				<iframe v-if="post.video" :src="post.video" width="640" height="360" frameborder="0"
					webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				<br>
				<br>
			</div>

		</div>
	</div>
</template>


<script>
export default {
	props: [
		'posts'
	],
	computed: {
		post() {
			return this.posts[this.$route.params.id] || {};
		}
	}
};
</script>


<style lang="scss" scoped>

@import '../../style';

.post-detail{
	@include layout-frame-inner;

	img, iframe{
		@media all and (max-width: $Mobile_Width) {
			max-width: 100%;
		}
	}

}

</style>
