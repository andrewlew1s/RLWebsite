<template>
	<!--
		PreviewList - a component to preview either the Published / Performed section

		properties:
			- mode: String ~ required, one of ['performed', 'published']
	-->
	<div class="PreviewList"
		v-if="isLoaded">

		<h3 v-text="title"/>

		<b-link
			:to="post.link"
			v-for="post in selectedPosts"
			:key="post._id">

			<section
				class="PreviewList__third"
				:style="post.thumbnailImage">

				<div class="PreviewList__overlay">
					<div class="PreviewList__text">
						<h4 class="PreviewList__title">
							{{post.title}}
						</h4>
						<p class="PreviewList__caption">
							{{post.caption}}
						</p>
					</div>
				</div>

				<h4 class="PreviewList__title PreviewList__text">
					{{post.title}}
				</h4>

			</section>

		</b-link>

		<b-link
			v-if="isPublished"
			href="/#/published">
			<section class="PreviewList__third PreviewList__third--published">
				<div class="PreviewList__overlay">
					<div class="PreviewList__text">
						<h4 class="PreviewList__title">
							Read More
						</h4>
					</div>
				</div>
				<h4 class="PreviewList__title PreviewList__text">
					Read More
				</h4>
			</section>
		</b-link>

		<b-link
			v-if="isPerformed"
			href="/#/published">
			<section class="PreviewList__third PreviewList__third--performed">
				<div class="PreviewList__overlay">
					<div class="PreviewList__text">
						<h4 class="PreviewList__title">
							Read More
						</h4>
					</div>
				</div>
				<h4 class="PreviewList__title PreviewList__text">
					Read More
				</h4>
			</section>
		</b-link>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		mode: {
			type: String,
			required: true
		}
	},
	computed: {
		...mapGetters({
			published: 'post/published',
			performed: 'post/performed'
		}),
		isPublished() {
			return this.mode === 'published';
		},
		isPerformed() {
			return this.mode === 'performed';
		},
		title() {
			if (this.isPublished) return 'Published';
			if (this.isPerformed) return 'Performed';
			return false;
		},
		posts() {
			if (this.isPublished) {
				const num = 2;
				if (this.published.length < num) return this.published;
				return this.published.slice(0, num);
			}
			if (this.isPerformed) {
				const num = 2;
				if (this.performed.length < num) return this.performed;
				return this.performed.slice(0, num);
			}
			return false;
		},
		isLoaded() {
			return this.selectedPosts.length !== 0;
		},
		selectedPosts() {
			if (!this.posts) return null;
			return this.posts.map(p => {
				const link = `/collection/${p._id}`;
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
