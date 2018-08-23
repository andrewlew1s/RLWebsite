<template>
	<div class="Collection">
		<div class="App__inner">

			<h3>
				Performed:
			</h3>

			<b-link
				:to="post.link"
				v-for="(post, i) in formattedPoems"
				:key="post._id">
				<section
					class="PreviewList__third Collection__thumb"
					:style="post.thumbnailImage"
					:class="{
							'Collection__thumb--first': (i%4==0),
							'Collection__thumb--last': (i%4==3)
						}">

					<div class="PreviewList__overlay">
						<div class="PreviewList__text">
							<h4 class="PreviewList__title Collection__title">
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


<style lang="scss" scoped>

@import '../../settings';

.Collection{

	&__card {
		height: 350px;
		margin-bottom: 60px;
		overflow: hidden;
		position: relative;
	}

	&__thumb {
		height: 200px;
		width: 23.5%;
		margin: 0 1% 40px 1%;
		float: left;

		&--first{
			margin-left: 0;
		}

		&--last{
			margin-right: 0;
		}
	}

	&__title {
		font-size: 24px;
	}
}

</style>
