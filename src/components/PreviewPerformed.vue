<template>
	<div class="Preview"
		v-if="isLoaded">

		<h3>Published</h3>

		<b-link
			:to="post.link"
			v-for="post in formattedPosts"
			:key="post._id">
			<section
				class="Preview__third"
				:style="post.thumbnailImage">

				<div class="Preview__overlay">
					<div class="Preview__text">
						<h4 class="Preview__title">
							{{post.title}}
						</h4>
						<p class="Preview__caption">
							{{post.caption}}
						</p>
					</div>
				</div>

				<h4 class="Preview__title Preview__text">
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
		posts() {
			if (this.performed.length === 0) return [];
			return [
				this.performed[0]
			];
		},
		isLoaded() {
			return this.formattedPosts.length !== 0;
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

<style lang="scss">
@import '../settings';

$highlightColour: $Highlight-Colour;
$shadowColour: $Shadow-Colour;

.Preview {
	height: 350px;
	width: 100%;
	background: $highlightColour;

	&__overlay {
		width: 100%;
		height: 100%;
		background: $shadowColour;
		opacity: 0.1;
		transition: opacity 0.2s ease-in;

		&:hover {
			opacity: 1;
		}
	}

	&__third {
		height: 100%;
		width: 33.33%;
		background-size: cover;
		background-position: center;
		float: left;
		position: relative;

	}

	&__text {
		color: $highlightColour;
	}

	&__title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	&__caption {
		width: 80%;
		margin: 0 10%;
		text-align: center;
		position: absolute;
		bottom: 10%;
	}

}
</style>
