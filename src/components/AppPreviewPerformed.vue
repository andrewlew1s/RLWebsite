<template>
	<div class="AppPreview"
		v-if="isLoaded">

		<h3>Performed</h3>

		<b-link href="/published">
			<section class="AppPreview__third AppPreview__third--performed">

				<div class="AppPreview__overlay">
					<div class="AppPreview__text">
						<h4 class="AppPreview__title">
							Read More
						</h4>
					</div>
				</div>

				<h4 class="AppPreview__title AppPreview__text">
					Read More
				</h4>

			</section>
		</b-link>

		<b-link
			:to="post.link"
			v-for="post in formattedPosts"
			:key="post._id">
			<section
				class="AppPreview__third"
				:style="post.thumbnailImage">

				<div class="AppPreview__overlay">
					<div class="AppPreview__text">
						<h4 class="AppPreview__title">
							{{post.title}}
						</h4>
						<p class="AppPreview__caption">
							{{post.caption}}
						</p>
					</div>
				</div>

				<h4 class="AppPreview__title AppPreview__text">
					{{post.title}}
				</h4>

			</section>
		</b-link>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			performed: 'post/performed'
		}),
		isLoaded() {
			return this.formattedPosts.length !== 0;
		},
		posts() {
			const num = 2;
			if (this.performed.length < num) return this.performed;
			return this.performed.slice(0, num);
		},
		formattedPosts() {
			if (!this.posts) return null;
			return this.posts.map(p => {
				const link = `/poems/${p._id}`;
				const formattedPost = {
					title: p.title,
					caption: p.caption,
					thumbnailImage: this.getImgStyle(p),
					link
				};
				return formattedPost;
			});
		}
	},
	methods: {
		getImgStyle(post) {
			return `background-image: url(${post.thumbnailImage});`;
		}
	}
};
</script>
