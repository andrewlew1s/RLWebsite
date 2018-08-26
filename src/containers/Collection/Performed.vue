<template>
	<div class="Performed">
		<div class="App__inner App__inner--padded">

			<h3>
				Performed:
			</h3>

			<b-link
				:to="post.link"
				v-for="(post) in formattedPoems"
				:key="post._id">
				<section
					class="PreviewList__third Performed__card"
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

		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters({
			performed: 'post/performed'
		}),
		formattedPoems() {
			if (!this.performed) return null;
			return this.performed.map(p => {
				const link = `/collection/${p._id}`;
				const formattedPoem = {
					title: p.title,
					caption: p.caption,
					thumbnailImage: this.getImgStyle(p),
					link
				};
				return formattedPoem;
			});
		}
	},
	methods: {
		...mapActions({
			fetch: 'post/fetchList'
		}),
		getImgStyle(post) {
			return `background-image: url(${post.thumbnailImage});`;
		}
	},
	created() {
		this.fetch();
	}
};
</script>

<style lang="scss">
.Performed {

	&__card {
		height: 250px;
	}
}
</style>
